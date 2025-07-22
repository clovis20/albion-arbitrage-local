export interface MarketPrice {
    item_type_id: string;
    city_id: number;
    quality: number;
    sell_price_min: number;
    sell_price_max: number;
    buy_price_max: number;
}
export interface ArbitrageOpportunity {
    id: string;
    sourceIngredientId: number;
    targetIngredientId: number;
    buyCityId: number;
    sellCityId: number;
    buyPrice: number;
    sellPrice: number;
    quantityMultiplier: number;
    grossProfit: number;
    netProfit: number;
    profitMargin: number;
    calculatedAt: Date;
}
export interface AlchemyIngredient {
    id: number;
    name: string;
    tier: number;
    quality: string;
    transmutationResult: {
        name: string;
        quantity: number;
    }[] | null;
}
export interface City {
    id: number;
    name: string;
    code: string;
}
export declare class DatabaseService {
    private db;
    private connected;
    private itemTypeIdToIngredientNameCache;
    private ingredientNameToObjectCache;
    private cityCodeToCityObjectCache;
    constructor();
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    isConnected(): boolean;
    private preloadCaches;
    getAllAlchemyIngredients(): Promise<AlchemyIngredient[]>;
    getAlchemyIngredientByName(name: string): Promise<AlchemyIngredient | null>;
    getAllCities(): Promise<City[]>;
    getCityByCode(code: string): Promise<City | null>;
    upsertMarketPrice(price: MarketPrice): Promise<void>;
    insertPriceHistoryRecord(record: {
        item_type_id: string;
        city_id: number;
        quality: number;
        price: number;
    }): Promise<void>;
    getMarketPrice(itemTypeId: string, cityId: number): Promise<MarketPrice | null>;
    clearArbitrageOpportunities(): Promise<void>;
    insertArbitrageOpportunities(opportunities: ArbitrageOpportunity[]): Promise<void>;
    getTopArbitrageOpportunities(limit?: number): Promise<any[]>;
    getArbitrageOpportunitiesByFilters(filters: any): Promise<ArbitrageOpportunity[]>;
    updatePriceHistory(): Promise<void>;
    getWeeklyAverages(): Promise<any[]>;
    executeQuery(query: string, params?: any[]): Promise<any>;
}
//# sourceMappingURL=database_service.d.ts.map