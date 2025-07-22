import { Server } from "socket.io";
import { DatabaseService } from "./database_service";
interface MarketData {
    Orders?: MarketOrder[];
}
interface MarketOrder {
    ItemTypeId: string;
    LocationId: number;
    AuctionType: string;
    UnitPriceSilver: number;
}
export declare class ArbitrageService {
    private db;
    private isCalculating;
    private readonly CALCULATION_INTERVAL_MINUTES;
    private readonly SALES_TAX_RATE;
    private readonly MIN_PROFIT_MARGIN;
    constructor(db: DatabaseService, io: Server, nats?: any);
    processMarketData(data: MarketData): Promise<void>;
    private groupOrdersByIngredientAndCity;
    private processOrderGroup;
    startPeriodicCalculation(): void;
    private calculateArbitrageOpportunities;
    getTopOpportunities(limit?: number): Promise<any[]>;
    getFilteredOpportunities(filters: any): Promise<any[]>;
    getWeeklyAverages(): Promise<any[]>;
}
export {};
//# sourceMappingURL=arbitrage_service.d.ts.map