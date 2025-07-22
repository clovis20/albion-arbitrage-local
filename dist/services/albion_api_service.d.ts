import { DatabaseService } from "./database_service";
export interface AlbionMarketData {
    item_id: string;
    city: string;
    quality: number;
    sell_price_min: number;
    sell_price_max: number;
    buy_price_max: number;
    updated_at: string;
}
export declare class AlbionAPIService {
    private baseURL;
    private databaseService;
    private isRunning;
    constructor(databaseService: DatabaseService);
    getMarketPrices(itemTypeId: string, locations?: string[]): Promise<AlbionMarketData[]>;
    getMarketHistory(itemTypeId: string, location: string, quality?: number): Promise<any>;
    getGoldPrice(): Promise<any>;
    processMarketData(): Promise<void>;
    private saveMarketData;
    startPeriodicDataFetch(intervalMinutes?: number): void;
}
//# sourceMappingURL=albion_api_service.d.ts.map