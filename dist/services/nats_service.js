"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NATSService = void 0;
const nats_1 = require("nats");
const logger_1 = require("../utils/logger");
class NATSService {
    constructor(arbitrageService) {
        this.nc = null;
        this.jsonCodec = (0, nats_1.JSONCodec)();
        this.subscriptions = [];
        this.CITY_MAP = {
            "0007": "THETFORD",
            "1002": "LYMHURST",
            "2004": "BRIDGEWATCH",
            "3005": "FORT_STERLING",
            "4002": "MARTLOCK",
            "3003": "CAERLEON",
        };
        this.BASE_ALCHEMY_TYPE_MAP = {
            ALCHEMY_RARE_PANTHER: "SHADOW CLAWS",
            ALCHEMY_RARE_ENT: "SYLVIAN ROOT",
            ALCHEMY_RARE_DIREBEAR: "SPIRIT PAWS",
            ALCHEMY_RARE_WEREWOLF: "WEREWOLF FANGS",
            ALCHEMY_RARE_IMP: "IMP'S HORN",
            ALCHEMY_RARE_ELEMENTAL: "RUNESTONE TOOTH",
            ALCHEMY_RARE_EAGLE: "DAWNFEATHER",
        };
        this.MONITORED_ITEM_TYPES = new Set([
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
        ]);
        this.arbitrageService = arbitrageService;
    }
    async connect() {
        try {
            const natsUrl = process.env.NATS_URL ||
                "nats://public:thenewalbiondata@nats.albion-online-data.com:4222";
            this.nc = await (0, nats_1.connect)({ servers: natsUrl });
            logger_1.logger.info(`✅ Connected to NATS at ${natsUrl}`);
            this.subscribeToMarketOrders();
        }
        catch (error) {
            logger_1.logger.error(`❌ Error connecting to NATS: ${error}`);
            logger_1.logger.warn("⚠️ Backend will continue without real-time market data");
        }
    }
    async disconnect() {
        if (this.nc) {
            for (const sub of this.subscriptions) {
                sub.unsubscribe();
            }
            await this.nc.drain();
            await this.nc.close();
            logger_1.logger.info("📊 Disconnected from NATS");
        }
    }
    subscribeToMarketOrders() {
        if (!this.nc) {
            logger_1.logger.error("NATS connection not established.");
            return;
        }
        const sub = this.nc.subscribe("marketorders.deduped");
        this.subscriptions.push(sub);
        logger_1.logger.info('👂 Subscribed to "marketorders.deduped" topic');
        (async () => {
            for await (const m of sub) {
                try {
                    const data = this.jsonCodec.decode(m.data);
                    if (data.Orders) {
                        data.Orders = data.Orders.filter((order) => this.MONITORED_ITEM_TYPES.has(order.ItemTypeId));
                        if (data.Orders.length > 0) {
                            await this.arbitrageService.processMarketData(data);
                        }
                    }
                }
                catch (error) {
                    logger_1.logger.error(`Error processing NATS message: ${error}`);
                }
            }
        })();
    }
    getCityCode(locationId) {
        return this.CITY_MAP[locationId.toString()] || null;
    }
    mapItemTypeIdToAlchemyIngredientName(itemTypeId) {
        const parts = itemTypeId.split("_");
        const tier = parseInt(parts[0].replace("T", ""));
        const baseItemTypeId = parts.slice(1).join("_");
        const baseAlchemyName = this.BASE_ALCHEMY_TYPE_MAP[baseItemTypeId];
        if (!baseAlchemyName) {
            return null;
        }
        let prefix;
        switch (tier) {
            case 3:
                prefix = "RUGGED";
                break;
            case 5:
                prefix = "FINE";
                break;
            case 7:
                prefix = "EXCELLENT";
                break;
            default:
                return null;
        }
        if (baseAlchemyName === "SHADOW CLAWS" && tier === 5) {
            return `FINED ${baseAlchemyName}`;
        }
        if (itemTypeId === "T7_ALCHEMY_RARE_ENT") {
            return `EXCELLENT SYLVIAN ROOT`;
        }
        return `${prefix} ${baseAlchemyName}`;
    }
}
exports.NATSService = NATSService;
//# sourceMappingURL=nats_service.js.map