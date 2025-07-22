import { ArbitrageService } from "./arbitrage_service";
export interface MarketOrder {
    Id: string;
    ItemTypeId: string;
    ItemGroupTypeId: string;
    LocationId: number;
    QualityLevel: number;
    EnchantmentLevel: number;
    UnitPriceSilver: number;
    Amount: number;
    AuctionType: "request" | "offer";
    Expires: string;
}
export interface MarketData {
    Orders?: MarketOrder[];
}
export declare class NATSService {
    private nc;
    private jsonCodec;
    private arbitrageService;
    private subscriptions;
    private readonly CITY_MAP;
    private readonly BASE_ALCHEMY_TYPE_MAP;
    private readonly MONITORED_ITEM_TYPES;
    constructor(arbitrageService: ArbitrageService);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    private subscribeToMarketOrders;
    getCityCode(locationId: number): string | null;
    mapItemTypeIdToAlchemyIngredientName(itemTypeId: string): string | null;
}
//# sourceMappingURL=nats_service.d.ts.map