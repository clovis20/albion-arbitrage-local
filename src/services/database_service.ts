import { Pool, PoolClient } from "pg"
import { logger } from "../utils/logger"

// Interfaces (mantenha estas atualizadas com o seu database_schema.sql)
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
  sourceIngredientId: number // Renomeado
  targetIngredientId: number // Renomeado
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
  // Renomeado de Artifact
  id: number
  name: string
  tier: number
  quality: string
  transmutationResult: { name: string; quantity: number }[] | null // Renomeado
}

export interface City {
  id: number
  name: string
  code: string
}

export class DatabaseService {
  private pool: Pool
  private connected: boolean = false

  // Cache para mapeamentos ItemTypeId -> Ingredient Name (para otimização)
  private itemTypeIdToIngredientNameCache = new Map<string, string>()
  // Cache para mapeamentos Ingredient Name -> Ingredient Object
  private ingredientNameToObjectCache = new Map<string, AlchemyIngredient>()
  // Cache para mapeamentos City Code -> City Object
  private cityCodeToCityObjectCache = new Map<string, City>()

  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST || "localhost",
      port: parseInt(process.env.DB_PORT || "5432"),
      database: process.env.DB_NAME || "albion_arbitrage",
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "",
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    })
  }

  public async connect(): Promise<void> {
    try {
      await this.pool.connect()
      this.connected = true
      logger.info("✅ PostgreSQL connected")
      await this.preloadCaches() // Preload caches on connect
    } catch (error) {
      logger.error(`❌ Failed to connect to PostgreSQL: ${error}`)
      throw error
    }
  }

  public async disconnect(): Promise<void> {
    if (this.connected) {
      await this.pool.end()
      this.connected = false
      logger.info("📦 PostgreSQL disconnected")
    }
  }

  public isConnected(): boolean {
    return this.connected
  }

  // --- Métodos de Cache ---
  private async preloadCaches(): Promise<void> {
    try {
      const allIngredients = await this.getAllAlchemyIngredients()
      allIngredients.forEach((ing) => {
        this.ingredientNameToObjectCache.set(ing.name, ing)
        // Preencher ItemTypeId to Name Cache (removido, agora centralizado no NATSService)
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

  // --- Métodos para Ingredientes de Alquimia (Alchemy Ingredients) ---

  public async getAllAlchemyIngredients(): Promise<AlchemyIngredient[]> {
    const query =
      'SELECT id, name, tier, quality, transmutation_result as "transmutationResult" FROM alchemy_ingredients ORDER BY name;'
    const result = await this.pool.query(query)
    return result.rows
  }

  public async getAlchemyIngredientByName(
    name: string
  ): Promise<AlchemyIngredient | null> {
    if (this.ingredientNameToObjectCache.has(name)) {
      return this.ingredientNameToObjectCache.get(name)!
    }
    const query =
      'SELECT id, name, tier, quality, transmutation_result as "transmutationResult" FROM alchemy_ingredients WHERE name = $1;'
    const result = await this.pool.query(query, [name])
    const ingredient = result.rows[0]
    if (ingredient) {
      this.ingredientNameToObjectCache.set(name, ingredient)
    }
    return ingredient || null
  }

  // Removido: getAlchemyIngredientNameByItemTypeId (centralizado no NATSService)
  // Removido: getCityCode (centralizado no NATSService)

  // --- Métodos para Cidades ---
  public async getAllCities(): Promise<City[]> {
    const query = "SELECT id, name, code FROM cities ORDER BY name;"
    const result = await this.pool.query(query)
    return result.rows
  }

  public async getCityByCode(code: string): Promise<City | null> {
    if (this.cityCodeToCityObjectCache.has(code)) {
      return this.cityCodeToCityObjectCache.get(code)!
    }
    const query = "SELECT id, name, code FROM cities WHERE code = $1;"
    const result = await this.pool.query(query, [code])
    const city = result.rows[0]
    if (city) {
      this.cityCodeToCityObjectCache.set(code, city)
    }
    return city || null
  }

  // --- Métodos para Preços de Mercado (Market Prices) ---

  public async upsertMarketPrice(price: MarketPrice): Promise<void> {
    const query = `
            INSERT INTO market_prices (item_type_id, city_id, quality, sell_price_min, sell_price_max, buy_price_max)
            VALUES ($1, $2, $3, $4, $5, $6)
            ON CONFLICT (item_type_id, city_id, quality) DO UPDATE SET
                sell_price_min = EXCLUDED.sell_price_min,
                sell_price_max = EXCLUDED.sell_price_max,
                buy_price_max = EXCLUDED.buy_price_max,
                updated_at = CURRENT_TIMESTAMP;
        `
    await this.pool.query(query, [
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
            VALUES ($1, $2, $3, $4);
        `
    await this.pool.query(query, [
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
            WHERE item_type_id = $1 AND city_id = $2;
        `
    const result = await this.pool.query(query, [itemTypeId, cityId])
    return result.rows[0] || null
  }

  // --- Métodos para Oportunidades de Arbitragem ---

  public async clearArbitrageOpportunities(): Promise<void> {
    const query = "DELETE FROM arbitrage_opportunities;"
    await this.pool.query(query)
  }

  public async insertArbitrageOpportunities(
    opportunities: ArbitrageOpportunity[]
  ): Promise<void> {
    if (opportunities.length === 0) return

    const client: PoolClient = await this.pool.connect()
    try {
      await client.query("BEGIN")
      for (const opp of opportunities) {
        const query = `
                    INSERT INTO arbitrage_opportunities (
                        source_ingredient_id, target_ingredient_id, buy_city_id, sell_city_id,
                        buy_price, sell_price, quantity_multiplier, gross_profit, net_profit,
                        profit_margin, calculated_at
                    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
                `
        await client.query(query, [
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
      await client.query("COMMIT")
    } catch (error) {
      await client.query("ROLLBACK")
      logger.error(`Error inserting arbitrage opportunities: ${error}`)
      throw error
    } finally {
      client.release()
    }
  }

  public async getTopArbitrageOpportunities(
    limit: number = 50
  ): Promise<any[]> {
    const query = `
            SELECT 
                ao.id,
                si.name as "item_name",
                si.tier as "item_tier",
                bc.name as "buy_city",
                sc.name as "sell_city",
                ao.buy_price as "buy_price",
                ao.sell_price as "sell_price",
                ao.quantity_multiplier as "quantity_multiplier",
                ao.net_profit as "profit",
                ao.profit_margin as "profit_percentage",
                ao.calculated_at as "updated_at"
            FROM arbitrage_opportunities ao
            JOIN alchemy_ingredients si ON ao.source_ingredient_id = si.id
            JOIN cities bc ON ao.buy_city_id = bc.id
            JOIN cities sc ON ao.sell_city_id = sc.id
            ORDER BY ao.net_profit DESC
            LIMIT $1;
        `
    const result = await this.pool.query(query, [limit])
    return result.rows
  }

  public async getArbitrageOpportunitiesByFilters(
    filters: any
  ): Promise<ArbitrageOpportunity[]> {
    // Implementar lógica de filtro aqui
    // Exemplo básico:
    let query = `
            SELECT 
                ao.id,
                ao.source_ingredient_id as "sourceIngredientId",
                si.name as "sourceIngredientName",
                si.tier as "sourceIngredientTier",
                si.quality as "sourceIngredientQuality",
                ao.target_ingredient_id as "targetIngredientId",
                ti.name as "targetIngredientName",
                ti.tier as "targetIngredientTier",
                ti.quality as "targetIngredientQuality",
                ao.buy_city_id as "buyCityId",
                bc.name as "buyCityName",
                ao.sell_city_id as "sellCityId",
                sc.name as "sellCityName",
                ao.buy_price as "buyPrice",
                ao.sell_price as "sellPrice",
                ao.quantity_multiplier as "quantityMultiplier",
                ao.gross_profit as "grossProfit",
                ao.net_profit as "netProfit",
                ao.profit_margin as "profitMargin",
                ao.calculated_at as "calculatedAt"
            FROM arbitrage_opportunities ao
            JOIN alchemy_ingredients si ON ao.source_ingredient_id = si.id
            JOIN alchemy_ingredients ti ON ao.target_ingredient_id = ti.id
            JOIN cities bc ON ao.buy_city_id = bc.id
            JOIN cities sc ON ao.sell_city_id = sc.id
            WHERE 1=1
        `
    const params: any[] = []
    let paramIndex = 1

    if (filters.minProfit) {
      query += ` AND ao.net_profit >= $${paramIndex++}`
      params.push(filters.minProfit)
    }
    if (filters.minMargin) {
      query += ` AND ao.profit_margin >= $${paramIndex++}`
      params.push(filters.minMargin)
    }
    if (filters.sourceIngredientId) {
      query += ` AND ao.source_ingredient_id = $${paramIndex++}`
      params.push(filters.sourceIngredientId)
    }
    // Adicione mais filtros conforme necessário

    query += ` ORDER BY ao.net_profit DESC LIMIT 100;` // Limite padrão

    const result = await this.pool.query(query, params)
    return result.rows
  }

  // --- Métodos para Histórico de Preços ---
  public async updatePriceHistory(): Promise<void> {
    const query = `
            INSERT INTO price_history (ingredient_id, city_id, date, avg_buy_price, avg_sell_price)
            SELECT
                mp.ingredient_id,
                mp.city_id,
                CURRENT_DATE,
                mp.buy_price_max,
                mp.sell_price_min
            FROM market_prices mp
            ON CONFLICT (ingredient_id, city_id, date)
            DO UPDATE SET
                avg_buy_price = (price_history.avg_buy_price + EXCLUDED.avg_buy_price) / 2,
                avg_sell_price = (price_history.avg_sell_price + EXCLUDED.avg_sell_price) / 2;
        `
    await this.pool.query(query)
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
            WHERE ph.date >= CURRENT_DATE - INTERVAL '7 days'
            GROUP BY ph.ingredient_id, ph.city_id, ai.name, c.name, c.code
        `

    const result = await this.pool.query(query)
    return result.rows
  }

  public async executeQuery(query: string, params?: any[]): Promise<any> {
    const result = await this.pool.query(query, params)
    return result.rows
  }
}
