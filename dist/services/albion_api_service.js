"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbionAPIService = void 0;
const axios_1 = __importDefault(require("axios"));
const logger_1 = require("../utils/logger");
class AlbionAPIService {
    constructor(databaseService) {
        this.baseURL = "https://www.albion-online-data.com/api/v2";
        this.isRunning = false;
        this.databaseService = databaseService;
    }
    async getMarketPrices(itemTypeId, locations = [
        "Bridgewatch",
        "Martlock",
        "Thetford",
        "Fort Sterling",
        "Lymhurst",
        "Caerleon",
    ]) {
        try {
            const response = await axios_1.default.get(`${this.baseURL}/stats/prices/${itemTypeId}`, {
                params: {
                    locations: locations.join(","),
                },
            });
            logger_1.logger.info(`✅ Fetched market data for ${itemTypeId}: ${response.data.length} records`);
            return response.data;
        }
        catch (error) {
            logger_1.logger.error(`Error fetching market data for ${itemTypeId}: ${error}`);
            return [];
        }
    }
    async getMarketHistory(itemTypeId, location, quality = 1) {
        try {
            const response = await axios_1.default.get(`${this.baseURL}/stats/history/${itemTypeId}`, {
                params: {
                    location,
                    quality,
                },
            });
            logger_1.logger.info(`✅ Fetched history for ${itemTypeId} in ${location}: ${response.data.length} records`);
            return response.data;
        }
        catch (error) {
            logger_1.logger.error(`Error fetching history for ${itemTypeId}: ${error}`);
            return [];
        }
    }
    async getGoldPrice() {
        try {
            const response = await axios_1.default.get(`${this.baseURL}/stats/gold`);
            return response.data;
        }
        catch (error) {
            logger_1.logger.error(`Error fetching gold price: ${error}`);
            return null;
        }
    }
    async processMarketData() {
        if (this.isRunning) {
            logger_1.logger.warn("⚠️ Market data processing already running");
            return;
        }
        this.isRunning = true;
        logger_1.logger.info("🔄 Starting market data processing...");
        try {
            const itemsToFetch = [
                "T3_ALCHEMY_RARE_PANTHER",
                "T5_ALCHEMY_RARE_PANTHER",
                "T7_ALCHEMY_RARE_PANTHER",
                "T3_ALCHEMY_RARE_ENT",
                "T5_ALCHEMY_RARE_ENT",
                "T7_ALCHEMY_RARE_ENT",
                "T3_ALCHEMY_RARE_DIREBEAR",
                "T5_ALCHEMY_RARE_DIREBEAR",
                "T7_ALCHEMY_RARE_DIREBEAR",
                "T3_ALCHEMY_RARE_WEREWOLF",
                "T5_ALCHEMY_RARE_WEREWOLF",
                "T7_ALCHEMY_RARE_WEREWOLF",
                "T3_ALCHEMY_RARE_IMP",
                "T5_ALCHEMY_RARE_IMP",
                "T7_ALCHEMY_RARE_IMP",
                "T3_ALCHEMY_RARE_ELEMENTAL",
                "T5_ALCHEMY_RARE_ELEMENTAL",
                "T7_ALCHEMY_RARE_ELEMENTAL",
                "T3_ALCHEMY_RARE_EAGLE",
                "T5_ALCHEMY_RARE_EAGLE",
                "T7_ALCHEMY_RARE_EAGLE",
            ];
            const cities = [
                "Bridgewatch",
                "Martlock",
                "Thetford",
                "Fort Sterling",
                "Lymhurst",
                "Caerleon",
                "Brecilien",
            ];
            for (const itemId of itemsToFetch) {
                try {
                    const marketData = await this.getMarketPrices(itemId, cities);
                    for (const data of marketData) {
                        await this.saveMarketData(data);
                    }
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                }
                catch (error) {
                    logger_1.logger.error(`Error processing ${itemId}: ${error}`);
                }
            }
            logger_1.logger.info("✅ Market data processing completed");
        }
        catch (error) {
            logger_1.logger.error(`Error in market data processing: ${error}`);
        }
        finally {
            this.isRunning = false;
        }
    }
    async saveMarketData(data) {
        try {
            const cityMap = {
                Bridgewatch: 1,
                Martlock: 2,
                Thetford: 3,
                "Fort Sterling": 4,
                Lymhurst: 5,
                Caerleon: 6,
                Brecilien: 7,
            };
            const cityId = cityMap[data.city];
            if (!cityId) {
                logger_1.logger.warn(`⚠️ Unknown city: ${data.city}`);
                return;
            }
            await this.databaseService.upsertMarketPrice({
                item_type_id: data.item_id,
                city_id: cityId,
                quality: data.quality,
                sell_price_min: data.sell_price_min,
                sell_price_max: data.sell_price_max,
                buy_price_max: data.buy_price_max,
            });
            await this.databaseService.insertPriceHistoryRecord({
                item_type_id: data.item_id,
                city_id: cityId,
                quality: data.quality,
                price: data.sell_price_min,
            });
        }
        catch (error) {
            logger_1.logger.error(`Error saving market data for ${data.item_id}: ${error}`);
        }
    }
    startPeriodicDataFetch(intervalMinutes = 2) {
        logger_1.logger.info(`📅 Starting periodic data fetch every ${intervalMinutes} minutes`);
        this.processMarketData();
        setInterval(() => {
            this.processMarketData();
        }, intervalMinutes * 60 * 1000);
    }
}
exports.AlbionAPIService = AlbionAPIService;
//# sourceMappingURL=albion_api_service.js.map