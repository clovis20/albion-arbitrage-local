"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
const logger_1 = require("../utils/logger");
const path = __importStar(require("path"));
class DatabaseService {
    constructor() {
        this.db = null;
        this.connected = false;
        this.itemTypeIdToIngredientNameCache = new Map();
        this.ingredientNameToObjectCache = new Map();
        this.cityCodeToCityObjectCache = new Map();
    }
    async connect() {
        try {
            let dbPath;
            const isPackaged = process.mainModule &&
                process.mainModule.filename.indexOf("app.asar") !== -1;
            if (isPackaged) {
                dbPath = path.join(process.resourcesPath, "albion_arbitrage.db");
            }
            else {
                dbPath = path.join(__dirname, "../../albion_arbitrage.db");
            }
            this.db = await (0, sqlite_1.open)({
                filename: dbPath,
                driver: sqlite3_1.default.Database,
            });
            this.connected = true;
            logger_1.logger.info("✅ SQLite connected");
            await this.preloadCaches();
        }
        catch (error) {
            logger_1.logger.error(`❌ Failed to connect to SQLite: ${error}`);
            throw error;
        }
    }
    async disconnect() {
        if (this.connected && this.db) {
            await this.db.close();
            this.connected = false;
            logger_1.logger.info("📦 SQLite disconnected");
        }
    }
    isConnected() {
        return this.connected;
    }
    async preloadCaches() {
        try {
            const allIngredients = await this.getAllAlchemyIngredients();
            allIngredients.forEach((ing) => {
                this.ingredientNameToObjectCache.set(ing.name, ing);
            });
            const allCities = await this.getAllCities();
            allCities.forEach((city) => {
                this.cityCodeToCityObjectCache.set(city.code, city);
            });
            logger_1.logger.info("✅ Database caches preloaded.");
        }
        catch (error) {
            logger_1.logger.error(`Error preloading database caches: ${error}`);
        }
    }
    async getAllAlchemyIngredients() {
        const query = "SELECT id, name, tier, quality, transmutation_result as transmutationResult FROM alchemy_ingredients ORDER BY name;";
        const rows = await this.db.all(query);
        return rows;
    }
    async getAlchemyIngredientByName(name) {
        if (this.ingredientNameToObjectCache.has(name)) {
            return this.ingredientNameToObjectCache.get(name);
        }
        const query = "SELECT id, name, tier, quality, transmutation_result as transmutationResult FROM alchemy_ingredients WHERE name = ?;";
        const row = await this.db.get(query, [name]);
        if (row) {
            this.ingredientNameToObjectCache.set(name, row);
        }
        return row || null;
    }
    async getAllCities() {
        const query = "SELECT id, name, code FROM cities ORDER BY name;";
        const rows = await this.db.all(query);
        return rows;
    }
    async getCityByCode(code) {
        if (this.cityCodeToCityObjectCache.has(code)) {
            return this.cityCodeToCityObjectCache.get(code);
        }
        const query = "SELECT id, name, code FROM cities WHERE code = ?;";
        const row = await this.db.get(query, [code]);
        if (row) {
            this.cityCodeToCityObjectCache.set(code, row);
        }
        return row || null;
    }
    async upsertMarketPrice(price) {
        const query = `
      INSERT INTO market_prices (item_type_id, city_id, quality, sell_price_min, sell_price_max, buy_price_max)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(item_type_id, city_id, quality) DO UPDATE SET
        sell_price_min = excluded.sell_price_min,
        sell_price_max = excluded.sell_price_max,
        buy_price_max = excluded.buy_price_max,
        updated_at = CURRENT_TIMESTAMP;
    `;
        await this.db.run(query, [
            price.item_type_id,
            price.city_id,
            price.quality,
            price.sell_price_min,
            price.sell_price_max,
            price.buy_price_max,
        ]);
    }
    async insertPriceHistoryRecord(record) {
        const query = `
      INSERT INTO price_history (item_type_id, city_id, quality, price)
      VALUES (?, ?, ?, ?);
    `;
        await this.db.run(query, [
            record.item_type_id,
            record.city_id,
            record.quality,
            record.price,
        ]);
    }
    async getMarketPrice(itemTypeId, cityId) {
        const query = `
      SELECT item_type_id, city_id, quality, sell_price_min, sell_price_max, buy_price_max
      FROM market_prices
      WHERE item_type_id = ? AND city_id = ?;
    `;
        const row = await this.db.get(query, [itemTypeId, cityId]);
        return row || null;
    }
    async clearArbitrageOpportunities() {
        const query = "DELETE FROM arbitrage_opportunities;";
        await this.db.run(query);
    }
    async insertArbitrageOpportunities(opportunities) {
        if (opportunities.length === 0)
            return;
        const db = this.db;
        await db.run("BEGIN TRANSACTION;");
        try {
            for (const opp of opportunities) {
                const query = `
          INSERT INTO arbitrage_opportunities (
            source_ingredient_id, target_ingredient_id, buy_city_id, sell_city_id,
            buy_price, sell_price, quantity_multiplier, gross_profit, net_profit,
            profit_margin, calculated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;
                await db.run(query, [
                    opp.sourceIngredientId,
                    opp.targetIngredientId,
                    opp.buyCityId,
                    opp.sellCityId,
                    opp.buyPrice,
                    opp.sellPrice,
                    opp.quantityMultiplier,
                    opp.grossProfit,
                    opp.netProfit,
                    opp.profitMargin,
                    opp.calculatedAt,
                ]);
            }
            await db.run("COMMIT;");
        }
        catch (error) {
            await db.run("ROLLBACK;");
            logger_1.logger.error(`Error inserting arbitrage opportunities: ${error}`);
            throw error;
        }
    }
    async getTopArbitrageOpportunities(limit = 50) {
        const query = `
      SELECT 
        ao.id,
        si.name as item_name,
        si.tier as item_tier,
        bc.name as buy_city,
        sc.name as sell_city,
        ao.buy_price as buy_price,
        ao.sell_price as sell_price,
        ao.quantity_multiplier as quantity_multiplier,
        ao.net_profit as profit,
        ao.profit_margin as profit_percentage,
        ao.calculated_at as updated_at
      FROM arbitrage_opportunities ao
      JOIN alchemy_ingredients si ON ao.source_ingredient_id = si.id
      JOIN cities bc ON ao.buy_city_id = bc.id
      JOIN cities sc ON ao.sell_city_id = sc.id
      ORDER BY ao.net_profit DESC
      LIMIT ?;
    `;
        const rows = await this.db.all(query, [limit]);
        return rows;
    }
    async getArbitrageOpportunitiesByFilters(filters) {
        let query = `
      SELECT 
        ao.id,
        ao.source_ingredient_id as sourceIngredientId,
        si.name as sourceIngredientName,
        si.tier as sourceIngredientTier,
        si.quality as sourceIngredientQuality,
        ao.target_ingredient_id as targetIngredientId,
        ti.name as targetIngredientName,
        ti.tier as targetIngredientTier,
        ti.quality as targetIngredientQuality,
        ao.buy_city_id as buyCityId,
        bc.name as buyCityName,
        ao.sell_city_id as sellCityId,
        sc.name as sellCityName,
        ao.buy_price as buyPrice,
        ao.sell_price as sellPrice,
        ao.quantity_multiplier as quantityMultiplier,
        ao.gross_profit as grossProfit,
        ao.net_profit as netProfit,
        ao.profit_margin as profitMargin,
        ao.calculated_at as calculatedAt
      FROM arbitrage_opportunities ao
      JOIN alchemy_ingredients si ON ao.source_ingredient_id = si.id
      JOIN alchemy_ingredients ti ON ao.target_ingredient_id = ti.id
      JOIN cities bc ON ao.buy_city_id = bc.id
      JOIN cities sc ON ao.sell_city_id = sc.id
      WHERE 1=1
    `;
        const params = [];
        if (filters.minProfit) {
            query += " AND ao.net_profit >= ?";
            params.push(filters.minProfit);
        }
        if (filters.minMargin) {
            query += " AND ao.profit_margin >= ?";
            params.push(filters.minMargin);
        }
        if (filters.sourceIngredientId) {
            query += " AND ao.source_ingredient_id = ?";
            params.push(filters.sourceIngredientId);
        }
        query += " ORDER BY ao.net_profit DESC LIMIT 100;";
        const rows = await this.db.all(query, params);
        return rows;
    }
    async updatePriceHistory() {
        const query = `
      INSERT INTO price_history (ingredient_id, city_id, date, avg_buy_price, avg_sell_price)
      SELECT
        mp.ingredient_id,
        mp.city_id,
        date('now'),
        mp.buy_price_max,
        mp.sell_price_min
      FROM market_prices mp
      ON CONFLICT(ingredient_id, city_id, date)
      DO UPDATE SET
        avg_buy_price = (avg_buy_price + excluded.avg_buy_price) / 2,
        avg_sell_price = (avg_sell_price + excluded.avg_sell_price) / 2;
    `;
        await this.db.run(query);
    }
    async getWeeklyAverages() {
        const query = `
      SELECT 
        ph.ingredient_id,
        ph.city_id,
        ai.name as ingredient_name,
        c.name as city_name,
        c.code as city_code,
        AVG(ph.avg_buy_price) as weekly_avg_buy,
        AVG(ph.avg_sell_price) as weekly_avg_sell
      FROM price_history ph
      JOIN alchemy_ingredients ai ON ph.ingredient_id = ai.id
      JOIN cities c ON ph.city_id = c.id
      WHERE ph.date >= date('now', '-7 days')
      GROUP BY ph.ingredient_id, ph.city_id, ai.name, c.name, c.code
    `;
        const rows = await this.db.all(query);
        return rows;
    }
    async executeQuery(query, params) {
        if (params) {
            return await this.db.all(query, params);
        }
        else {
            return await this.db.all(query);
        }
    }
}
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database_service.js.map