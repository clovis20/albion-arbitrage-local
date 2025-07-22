"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbitrageService = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const logger_1 = require("../utils/logger");
class ArbitrageService {
    constructor(db, io, nats) {
        this.isCalculating = false;
        this.CALCULATION_INTERVAL_MINUTES = 2;
        this.SALES_TAX_RATE = 0.04;
        this.MIN_PROFIT_MARGIN = 5.0;
        this.db = db;
    }
    async processMarketData(data) {
        if (!data.Orders || !Array.isArray(data.Orders))
            return;
        try {
            const groupedOrders = this.groupOrdersByIngredientAndCity(data.Orders);
            for (const [key, orders] of groupedOrders.entries()) {
                await this.processOrderGroup(key, orders);
            }
        }
        catch (error) {
            logger_1.logger.error(`Error processing market data: ${error}`);
        }
    }
    groupOrdersByIngredientAndCity(orders) {
        const grouped = new Map();
        for (const order of orders) {
            const key = `${order.ItemTypeId}-${order.LocationId}`;
            if (!grouped.has(key)) {
                grouped.set(key, []);
            }
            grouped.get(key).push(order);
        }
        return grouped;
    }
    async processOrderGroup(key, orders) {
        const [itemTypeId, locationIdStr] = key.split("-");
        const locationId = parseInt(locationIdStr);
        const ingredientName = itemTypeId;
        const city = await this.db.getCityByCode(locationId.toString());
        if (!city) {
            logger_1.logger.warn(`City not found for LocationId ${locationId}.`);
            return;
        }
        const ingredient = await this.db.getAlchemyIngredientByName(ingredientName);
        if (!ingredient) {
            logger_1.logger.warn(`Alchemy ingredient not found in DB for name: ${ingredientName}`);
            return;
        }
        const buyOrders = orders
            .filter((o) => o.AuctionType === "request")
            .sort((a, b) => b.UnitPriceSilver - a.UnitPriceSilver);
        const sellOrders = orders
            .filter((o) => o.AuctionType === "offer")
            .sort((a, b) => a.UnitPriceSilver - b.UnitPriceSilver);
        const buyPriceMax = buyOrders.length > 0 ? buyOrders[0].UnitPriceSilver : null;
        const sellPriceMin = sellOrders.length > 0 ? sellOrders[0].UnitPriceSilver : null;
        const marketPrice = {
            item_type_id: ingredient.name,
            city_id: city.id,
            quality: 1,
            sell_price_min: sellPriceMin || 0,
            sell_price_max: sellPriceMin || 0,
            buy_price_max: buyPriceMax || 0,
        };
        await this.db.upsertMarketPrice(marketPrice);
    }
    startPeriodicCalculation() {
        node_cron_1.default.schedule(`*/${this.CALCULATION_INTERVAL_MINUTES} * * * *`, async () => {
            if (this.isCalculating) {
                logger_1.logger.warn("Skipping arbitrage calculation, previous one still in progress.");
                return;
            }
            this.isCalculating = true;
            logger_1.logger.info("⚙️ Starting arbitrage calculation...");
            try {
                await this.calculateArbitrageOpportunities();
                logger_1.logger.info("✅ Arbitrage calculation completed.");
            }
            catch (error) {
                logger_1.logger.error(`Error during arbitrage calculation: ${error}`);
            }
            finally {
                this.isCalculating = false;
            }
        });
        node_cron_1.default.schedule("0 0 * * *", async () => {
            try {
                await this.db.updatePriceHistory();
                logger_1.logger.info("✅ Price history updated");
            }
            catch (error) {
                logger_1.logger.error(`Error updating price history: ${error}`);
            }
        });
        logger_1.logger.info(`📅 Periodic arbitrage calculation started (every ${this.CALCULATION_INTERVAL_MINUTES} minutes)`);
    }
    async calculateArbitrageOpportunities() {
        const allAlchemyIngredients = await this.db.getAllAlchemyIngredients();
        const cities = await this.db.getAllCities();
        const currentPrices = new Map();
        for (const ingredient of allAlchemyIngredients) {
            for (const city of cities) {
                const dbPrice = await this.db.getMarketPrice(ingredient.name, city.id);
                if (dbPrice) {
                    currentPrices.set(`${ingredient.id}-${city.id}`, dbPrice);
                }
            }
        }
        const opportunities = [];
        const allIngredients = allAlchemyIngredients;
        for (const base of Array.from(new Set(allIngredients.map((ing) => ing.name.split("_")[3])))) {
            const itemTiers = allIngredients.filter((ing) => {
                const b = ing.name.split("_")[3];
                return b === base;
            });
            if (itemTiers.length === 0)
                continue;
            const t3 = itemTiers.find((ing) => ing.tier === 3);
            const t5 = itemTiers.find((ing) => ing.tier === 5);
            const t7 = itemTiers.find((ing) => ing.tier === 7);
            for (const buyCity of cities) {
                for (const sellCity of cities) {
                    if (buyCity.id === sellCity.id)
                        continue;
                    if (t5 && t3) {
                        const buy = currentPrices.get(`${t5.id}-${buyCity.id}`);
                        const sell = currentPrices.get(`${t3.id}-${sellCity.id}`);
                        if (buy && sell) {
                            const cost = buy.sell_price_min || 0;
                            const unitSell = sell.buy_price_max || 0;
                            if (cost === 0 || unitSell === 0)
                                continue;
                            const totalSell = unitSell * 2;
                            const netRevenue = totalSell * (1 - this.SALES_TAX_RATE);
                            const netProfit = netRevenue - cost;
                            const profitMargin = cost > 0 ? (netProfit / cost) * 100 : 0;
                            opportunities.push({
                                id: "",
                                sourceIngredientId: t5.id,
                                targetIngredientId: t3.id,
                                buyCityId: buyCity.id,
                                sellCityId: sellCity.id,
                                buyPrice: Math.round(cost),
                                sellPrice: Math.round(unitSell),
                                quantityMultiplier: 2,
                                grossProfit: Math.round(totalSell - cost),
                                netProfit: Math.round(netProfit),
                                profitMargin: parseFloat(profitMargin.toFixed(2)),
                                calculatedAt: new Date(),
                            });
                        }
                    }
                    if (t7 && t5) {
                        const buy = currentPrices.get(`${t7.id}-${buyCity.id}`);
                        const sell = currentPrices.get(`${t5.id}-${sellCity.id}`);
                        if (buy && sell) {
                            const cost = buy.sell_price_min || 0;
                            const unitSell = sell.buy_price_max || 0;
                            if (cost === 0 || unitSell === 0)
                                continue;
                            const totalSell = unitSell * 2;
                            const netRevenue = totalSell * (1 - this.SALES_TAX_RATE);
                            const netProfit = netRevenue - cost;
                            const profitMargin = cost > 0 ? (netProfit / cost) * 100 : 0;
                            opportunities.push({
                                id: "",
                                sourceIngredientId: t7.id,
                                targetIngredientId: t5.id,
                                buyCityId: buyCity.id,
                                sellCityId: sellCity.id,
                                buyPrice: Math.round(cost),
                                sellPrice: Math.round(unitSell),
                                quantityMultiplier: 2,
                                grossProfit: Math.round(totalSell - cost),
                                netProfit: Math.round(netProfit),
                                profitMargin: parseFloat(profitMargin.toFixed(2)),
                                calculatedAt: new Date(),
                            });
                        }
                    }
                    if (t7 && t3) {
                        const buy = currentPrices.get(`${t7.id}-${buyCity.id}`);
                        const sell = currentPrices.get(`${t3.id}-${sellCity.id}`);
                        if (buy && sell) {
                            const cost = buy.sell_price_min || 0;
                            const unitSell = sell.buy_price_max || 0;
                            if (cost === 0 || unitSell === 0)
                                continue;
                            const totalSell = unitSell * 4;
                            const netRevenue = totalSell * (1 - this.SALES_TAX_RATE);
                            const netProfit = netRevenue - cost;
                            const profitMargin = cost > 0 ? (netProfit / cost) * 100 : 0;
                            opportunities.push({
                                id: "",
                                sourceIngredientId: t7.id,
                                targetIngredientId: t3.id,
                                buyCityId: buyCity.id,
                                sellCityId: sellCity.id,
                                buyPrice: Math.round(cost),
                                sellPrice: Math.round(unitSell),
                                quantityMultiplier: 4,
                                grossProfit: Math.round(totalSell - cost),
                                netProfit: Math.round(netProfit),
                                profitMargin: parseFloat(profitMargin.toFixed(2)),
                                calculatedAt: new Date(),
                            });
                        }
                    }
                }
            }
        }
        await this.db.clearArbitrageOpportunities();
        if (opportunities.length > 0) {
            await this.db.insertArbitrageOpportunities(opportunities);
        }
    }
    async getTopOpportunities(limit = 50) {
        return await this.db.getTopArbitrageOpportunities(limit);
    }
    async getFilteredOpportunities(filters) {
        return await this.db.getArbitrageOpportunitiesByFilters(filters);
    }
    async getWeeklyAverages() {
        const averages = await this.db.getWeeklyAverages();
        return averages;
    }
}
exports.ArbitrageService = ArbitrageService;
//# sourceMappingURL=arbitrage_service.js.map