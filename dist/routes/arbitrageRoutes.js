"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createArbitrageRoutes;
const express_1 = require("express");
function createArbitrageRoutes(db, arbitrage) {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => {
        res.send("Arbitrage routes are working!");
    });
    router.get("/test", async (req, res) => {
        try {
            const count = await db.executeQuery("SELECT COUNT(*) FROM arbitrage_opportunities");
            const opportunities = await db.getTopArbitrageOpportunities(5);
            res.json({
                count: count.rows[0].count,
                opportunities: opportunities,
                message: "Dados de arbitragem verificados",
            });
        }
        catch (error) {
            res.status(500).json({ error: String(error) });
        }
    });
    router.get("/top", async (req, res) => {
        try {
            const limit = parseInt(req.query.limit) || 200;
            const opportunities = await db.getTopArbitrageOpportunities(limit);
            return res.json({ opportunities });
        }
        catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    });
    router.get("/filtered", async (req, res) => {
        try {
            const filters = {};
            if (req.query.minProfit)
                filters.minProfit = parseFloat(req.query.minProfit);
            if (req.query.minMargin)
                filters.minMargin = parseFloat(req.query.minMargin);
            if (req.query.sourceIngredientId)
                filters.sourceIngredientId = parseInt(req.query.sourceIngredientId);
            if (typeof db.getArbitrageOpportunitiesByFilters === "function") {
                const opportunities = await db.getArbitrageOpportunitiesByFilters(filters);
                return res.json({ opportunities });
            }
            else {
                const opportunities = await db.getTopArbitrageOpportunities(100);
                return res.json({
                    opportunities,
                    warning: "Filtros não aplicados (método getArbitrageOpportunitiesByFilters não encontrado)",
                });
            }
        }
        catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    });
    router.get("/filters-info", (req, res) => {
        res.json({
            availableFilters: [
                {
                    name: "minProfit",
                    type: "number",
                    description: "Lucro mínimo em prata",
                },
                {
                    name: "minMargin",
                    type: "number",
                    description: "Margem mínima de lucro em %",
                },
                {
                    name: "sourceIngredientId",
                    type: "number",
                    description: "ID do ingrediente de origem",
                },
            ],
            example: "/api/arbitrage/filter?minProfit=10000&minMargin=10&sourceIngredientId=1",
        });
    });
    router.get("/manual-simulate", async (req, res) => {
        try {
            const { buy_city, sell_city, item_base } = req.query;
            if (!buy_city || !sell_city) {
                return res
                    .status(400)
                    .json({ error: "buy_city e sell_city são obrigatórios" });
            }
            const cities = await db.getAllCities();
            const buyCity = cities.find((c) => c.name.toLowerCase() === String(buy_city).toLowerCase());
            const sellCity = cities.find((c) => c.name.toLowerCase() === String(sell_city).toLowerCase());
            if (!buyCity || !sellCity) {
                return res
                    .status(400)
                    .json({ error: "Cidade de compra ou venda não encontrada" });
            }
            const allIngredients = await db.getAllAlchemyIngredients();
            let bases = [];
            if (!item_base) {
                bases = Array.from(new Set(allIngredients.map((ing) => ing.name.split("_")[3])));
            }
            else {
                bases = [String(item_base).toUpperCase()];
            }
            const groupedResults = [];
            for (const base of bases) {
                const itemTiers = allIngredients.filter((ing) => {
                    const b = ing.name.split("_")[3];
                    return b === base;
                });
                if (itemTiers.length === 0)
                    continue;
                const getPrice = async (itemName, cityId) => {
                    const price = await db.getMarketPrice(itemName, cityId);
                    return price;
                };
                const SALES_TAX = 0.04;
                const results = [];
                const t3 = itemTiers.find((ing) => ing.tier === 3);
                const t5 = itemTiers.find((ing) => ing.tier === 5);
                const t7 = itemTiers.find((ing) => ing.tier === 7);
                if (t5 && t3) {
                    const buy = await getPrice(t5.name, buyCity.id);
                    const sell = await getPrice(t3.name, sellCity.id);
                    if (buy && sell) {
                        const cost = buy.sell_price_min || 0;
                        const unitSell = sell.buy_price_max || 0;
                        const totalSell = unitSell * 2;
                        const netRevenue = totalSell * (1 - SALES_TAX);
                        const netProfit = netRevenue - cost;
                        const profitMargin = cost > 0 ? (netProfit / cost) * 100 : 0;
                        results.push({
                            conversion: `${t5.name} → 2x ${t3.name}`,
                            buy_city: buyCity.name,
                            sell_city: sellCity.name,
                            buy_price: buy.sell_price_min,
                            buy_qty: 1,
                            sell_price: unitSell,
                            sell_qty: 2,
                            unit_sell_price: unitSell,
                            total_sell_price: totalSell,
                            net_profit: netProfit,
                            profit_margin: profitMargin,
                            details: { t5, t3 },
                        });
                    }
                }
                if (t7 && t5) {
                    const buy = await getPrice(t7.name, buyCity.id);
                    const sell = await getPrice(t5.name, sellCity.id);
                    if (buy && sell) {
                        const cost = buy.sell_price_min || 0;
                        const unitSell = sell.buy_price_max || 0;
                        const totalSell = unitSell * 2;
                        const netRevenue = totalSell * (1 - SALES_TAX);
                        const netProfit = netRevenue - cost;
                        const profitMargin = cost > 0 ? (netProfit / cost) * 100 : 0;
                        results.push({
                            conversion: `${t7.name} → 2x ${t5.name}`,
                            buy_city: buyCity.name,
                            sell_city: sellCity.name,
                            buy_price: buy.sell_price_min,
                            buy_qty: 1,
                            sell_price: unitSell,
                            sell_qty: 2,
                            unit_sell_price: unitSell,
                            total_sell_price: totalSell,
                            net_profit: netProfit,
                            profit_margin: profitMargin,
                            details: { t7, t5 },
                        });
                    }
                }
                if (t7 && t3) {
                    const buy = await getPrice(t7.name, buyCity.id);
                    const sell = await getPrice(t3.name, sellCity.id);
                    if (buy && sell) {
                        const cost = buy.sell_price_min || 0;
                        const unitSell = sell.buy_price_max || 0;
                        const totalSell = unitSell * 4;
                        const netRevenue = totalSell * (1 - SALES_TAX);
                        const netProfit = netRevenue - cost;
                        const profitMargin = cost > 0 ? (netProfit / cost) * 100 : 0;
                        results.push({
                            conversion: `${t7.name} → 4x ${t3.name}`,
                            buy_city: buyCity.name,
                            sell_city: sellCity.name,
                            buy_price: buy.sell_price_min,
                            buy_qty: 1,
                            sell_price: unitSell,
                            sell_qty: 4,
                            unit_sell_price: unitSell,
                            total_sell_price: totalSell,
                            net_profit: netProfit,
                            profit_margin: profitMargin,
                            details: { t7, t3 },
                        });
                    }
                }
                if (results.length > 0) {
                    groupedResults.push({ base, scenarios: results });
                }
            }
            if (!item_base) {
                return res.json({ grouped: groupedResults });
            }
            else {
                return res.json({ scenarios: groupedResults[0]?.scenarios || [] });
            }
        }
        catch (error) {
            return res.status(500).json({ error: String(error) });
        }
    });
    return router;
}
//# sourceMappingURL=arbitrageRoutes.js.map