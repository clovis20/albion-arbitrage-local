import sqlite3 from "sqlite3"
import { open, Database } from "sqlite"
import { logger } from "../utils/logger"
import * as path from "path"

// Interfaces (mantidas)
export interface MarketPrice {
  item_type_id: string
  city_id: number
  quality: number
  sell_price_min: number
  sell_price_max: number
  buy_price_max: number
}

export interface ArbitrageOpportunity {
  id: string
  sourceIngredientId: number
  targetIngredientId: number
  buyCityId: number
  sellCityId: number
  buyPrice: number
  sellPrice: number
  quantityMultiplier: number
  grossProfit: number
  netProfit: number
  profitMargin: number
  calculatedAt: Date
}

export interface AlchemyIngredient {
  id: number
  name: string
  tier: number
  quality: string
  transmutationResult: { name: string; quantity: number }[] | null
}

export interface City {
  id: number
  name: string
  code: string
}

export class DatabaseService {
  private db: Database | null = null
  private connected: boolean = false

  private itemTypeIdToIngredientNameCache = new Map<string, string>()
  private ingredientNameToObjectCache = new Map<string, AlchemyIngredient>()
  private cityCodeToCityObjectCache = new Map<string, City>()

  constructor() {}

  public async connect(): Promise<void> {
    try {
      let dbPath: string
      const isPackaged =
        process.mainModule &&
        process.mainModule.filename.indexOf("app.asar") !== -1
      if (isPackaged) {
        dbPath = path.join(
          (process as any).resourcesPath,
          "albion_arbitrage.db"
        )
      } else {
        dbPath = path.join(__dirname, "../../albion_arbitrage.db")
      }
      this.db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
      })
      this.connected = true
      logger.info("✅ SQLite connected")
      await this.preloadCaches()
    } catch (error) {
      logger.error(`❌ Failed to connect to SQLite: ${error}`)
      throw error
    }
  }

  public async disconnect(): Promise<void> {
    if (this.connected && this.db) {
      await this.db.close()
      this.connected = false
      logger.info("📦 SQLite disconnected")
    }
  }

  public isConnected(): boolean {
    return this.connected
  }

  private async preloadCaches(): Promise<void> {
    try {
      const allIngredients = await this.getAllAlchemyIngredients()
      allIngredients.forEach((ing) => {
        this.ingredientNameToObjectCache.set(ing.name, ing)
      })
      const allCities = await this.getAllCities()
      allCities.forEach((city) => {
        this.cityCodeToCityObjectCache.set(city.code, city)
      })
      logger.info("✅ Database caches preloaded.")
    } catch (error) {
      logger.error(`Error preloading database caches: ${error}`)
    }
  }

  // --- Métodos para Ingredientes de Alquimia ---
  public async getAllAlchemyIngredients(): Promise<AlchemyIngredient[]> {
    const query =
      "SELECT id, name, tier, quality, transmutation_result as transmutationResult FROM alchemy_ingredients ORDER BY name;"
    const rows = await this.db!.all(query)
    return rows
  }

  public async getAlchemyIngredientByName(
    name: string
  ): Promise<AlchemyIngredient | null> {
    if (this.ingredientNameToObjectCache.has(name)) {
      return this.ingredientNameToObjectCache.get(name)!
    }
    const query =
      "SELECT id, name, tier, quality, transmutation_result as transmutationResult FROM alchemy_ingredients WHERE name = ?;"
    const row = await this.db!.get(query, [name])
    if (row) {
      this.ingredientNameToObjectCache.set(name, row)
    }
    return row || null
  }

  // --- Métodos para Cidades ---
  public async getAllCities(): Promise<City[]> {
    const query = "SELECT id, name, code FROM cities ORDER BY name;"
    const rows = await this.db!.all(query)
    return rows
  }

  public async getCityByCode(code: string): Promise<City | null> {
    if (this.cityCodeToCityObjectCache.has(code)) {
      return this.cityCodeToCityObjectCache.get(code)!
    }
    const query = "SELECT id, name, code FROM cities WHERE code = ?;"
    const row = await this.db!.get(query, [code])
    if (row) {
      this.cityCodeToCityObjectCache.set(code, row)
    }
    return row || null
  }

  // --- Métodos para Preços de Mercado ---
  public async upsertMarketPrice(price: MarketPrice): Promise<void> {
    const query = `
      INSERT INTO market_prices (item_type_id, city_id, quality, sell_price_min, sell_price_max, buy_price_max)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(item_type_id, city_id, quality) DO UPDATE SET
        sell_price_min = excluded.sell_price_min,
        sell_price_max = excluded.sell_price_max,
        buy_price_max = excluded.buy_price_max,
        updated_at = CURRENT_TIMESTAMP;
    `
    await this.db!.run(query, [
      price.item_type_id,
      price.city_id,
      price.quality,
      price.sell_price_min,
      price.sell_price_max,
      price.buy_price_max,
    ])
  }

  public async insertPriceHistoryRecord(record: {
    item_type_id: string
    city_id: number
    quality: number
    price: number
  }): Promise<void> {
    const query = `
      INSERT INTO price_history (item_type_id, city_id, quality, price)
      VALUES (?, ?, ?, ?);
    `
    await this.db!.run(query, [
      record.item_type_id,
      record.city_id,
      record.quality,
      record.price,
    ])
  }

  public async getMarketPrice(
    itemTypeId: string,
    cityId: number
  ): Promise<MarketPrice | null> {
    const query = `
      SELECT item_type_id, city_id, quality, sell_price_min, sell_price_max, buy_price_max
      FROM market_prices
      WHERE item_type_id = ? AND city_id = ?;
    `
    const row = await this.db!.get(query, [itemTypeId, cityId])
    return row || null
  }

  // --- Métodos para Oportunidades de Arbitragem ---
  public async clearArbitrageOpportunities(): Promise<void> {
    const query = "DELETE FROM arbitrage_opportunities;"
    await this.db!.run(query)
  }

  public async insertArbitrageOpportunities(
    opportunities: ArbitrageOpportunity[]
  ): Promise<void> {
    if (opportunities.length === 0) return
    const db = this.db!
    await db.run("BEGIN TRANSACTION;")
    try {
      for (const opp of opportunities) {
        const query = `
          INSERT INTO arbitrage_opportunities (
            source_ingredient_id, target_ingredient_id, buy_city_id, sell_city_id,
            buy_price, sell_price, quantity_multiplier, gross_profit, net_profit,
            profit_margin, calculated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `
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
        ])
      }
      await db.run("COMMIT;")
    } catch (error) {
      await db.run("ROLLBACK;")
      logger.error(`Error inserting arbitrage opportunities: ${error}`)
      throw error
    }
  }

  public async getTopArbitrageOpportunities(
    limit: number = 50
  ): Promise<any[]> {
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
    `
    const rows = await this.db!.all(query, [limit])
    return rows
  }

  public async getArbitrageOpportunitiesByFilters(
    filters: any
  ): Promise<ArbitrageOpportunity[]> {
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
    `
    const params: any[] = []
    if (filters.minProfit) {
      query += " AND ao.net_profit >= ?"
      params.push(filters.minProfit)
    }
    if (filters.minMargin) {
      query += " AND ao.profit_margin >= ?"
      params.push(filters.minMargin)
    }
    if (filters.sourceIngredientId) {
      query += " AND ao.source_ingredient_id = ?"
      params.push(filters.sourceIngredientId)
    }
    query += " ORDER BY ao.net_profit DESC LIMIT 100;"
    const rows = await this.db!.all(query, params)
    return rows
  }

  // --- Métodos para Histórico de Preços ---
  public async updatePriceHistory(): Promise<void> {
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
    `
    await this.db!.run(query)
  }

  public async getWeeklyAverages(): Promise<any[]> {
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
    `
    const rows = await this.db!.all(query)
    return rows
  }

  public async executeQuery(query: string, params?: any[]): Promise<any> {
    if (params) {
      return await this.db!.all(query, params)
    } else {
      return await this.db!.all(query)
    }
  }
}
