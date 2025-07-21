// src/services/arbitrage_service.ts
import { Server } from "socket.io"
import cron from "node-cron"
import {
  DatabaseService,
  MarketPrice,
  ArbitrageOpportunity,
  AlchemyIngredient,
} from "./database_service" // Atualizado para AlchemyIngredient
import { RedisService } from "./redis_service"
// Removido NATS - usando API REST
import { logger } from "../utils/logger"

// Interfaces simples para substituir NATS
interface MarketData {
  Orders?: MarketOrder[]
}

interface MarketOrder {
  ItemTypeId: string
  LocationId: number
  AuctionType: string
  UnitPriceSilver: number
}

export class ArbitrageService {
  private db: DatabaseService
  private redis: RedisService
  private io: Server
  // NATS removido
  private isCalculating: boolean = false

  private readonly CALCULATION_INTERVAL_MINUTES = 2 // Frequência do cálculo de arbitragem
  private readonly SALES_TAX_RATE = 0.04 // 4% de taxa de venda
  private readonly MIN_PROFIT_MARGIN = 5.0 // Margem de lucro mínima desejada (ex: 5%)

  constructor(
    db: DatabaseService,
    redis: RedisService,
    io: Server,
    nats?: any // NATS opcional agora
  ) {
    this.db = db
    this.redis = redis
    this.io = io
    // NATS removido
  }

  public async processMarketData(data: MarketData): Promise<void> {
    if (!data.Orders || !Array.isArray(data.Orders)) return

    try {
      const groupedOrders = this.groupOrdersByIngredientAndCity(data.Orders) // Renomeado

      for (const [key, orders] of groupedOrders.entries()) {
        await this.processOrderGroup(key, orders)
      }

      await this.redis.incrementCounter("market_updates_processed", 3600)
    } catch (error) {
      logger.error(`Error processing market data: ${error}`)
    }
  }

  private groupOrdersByIngredientAndCity(
    orders: MarketOrder[]
  ): Map<string, MarketOrder[]> {
    // Renomeado
    const grouped = new Map<string, MarketOrder[]>()

    for (const order of orders) {
      const key = `${order.ItemTypeId}-${order.LocationId}`
      if (!grouped.has(key)) {
        grouped.set(key, [])
      }
      grouped.get(key)!.push(order)
    }
    return grouped
  }

  private async processOrderGroup(
    key: string,
    orders: MarketOrder[]
  ): Promise<void> {
    // Assume key is 'ItemTypeId-LocationId'
    const [itemTypeId, locationIdStr] = key.split("-")
    const locationId = parseInt(locationIdStr)

    // Mapeamento simplificado - usar itemTypeId diretamente
    const ingredientName = itemTypeId // Usar itemTypeId como nome do ingrediente
    const city = await this.db.getCityByCode(locationId.toString()) // Usar locationId como city_code

    if (!city) {
      logger.warn(`City not found for LocationId ${locationId}.`)
      return
    }

    const ingredient = await this.db.getAlchemyIngredientByName(ingredientName)

    if (!ingredient) {
      logger.warn(
        `Alchemy ingredient not found in DB for name: ${ingredientName}`
      )
      return
    }

    const buyOrders = orders
      .filter((o) => o.AuctionType === "request")
      .sort((a, b) => b.UnitPriceSilver - a.UnitPriceSilver) // Descending for buy
    const sellOrders = orders
      .filter((o) => o.AuctionType === "offer")
      .sort((a, b) => a.UnitPriceSilver - b.UnitPriceSilver) // Ascending for sell

    const buyPriceMax =
      buyOrders.length > 0 ? buyOrders[0].UnitPriceSilver : null
    const sellPriceMin =
      sellOrders.length > 0 ? sellOrders[0].UnitPriceSilver : null

    const marketPrice: MarketPrice = {
      item_type_id: ingredient.name, // Usar nome do ingrediente como item_type_id
      city_id: city.id,
      quality: 1, // Qualidade padrão
      sell_price_min: sellPriceMin || 0, // Preço que EU compro (ofertas de venda)
      sell_price_max: sellPriceMin || 0, // Mesmo valor para min/max por simplicidade
      buy_price_max: buyPriceMax || 0, // Preço que EU vendo (pedidos de compra)
    }

    // Salvar/Atualizar no banco de dados e cache Redis
    await this.db.upsertMarketPrice(marketPrice)
    await this.redis.cacheMarketPrice(
      `${ingredient.id}-${city.id}`,
      marketPrice,
      60 * 5
    ) // Cache por 5 minutos

    // Emitir atualização via Socket.io (opcional, pode ser feito após o cálculo de arbitragem)
    // this.io.to('market_updates').emit('marketPriceUpdate', marketPrice);
  }

  public startPeriodicCalculation(): void {
    cron.schedule(
      `*/${this.CALCULATION_INTERVAL_MINUTES} * * * *`,
      async () => {
        if (this.isCalculating) {
          logger.warn(
            "Skipping arbitrage calculation, previous one still in progress."
          )
          return
        }
        this.isCalculating = true
        logger.info("⚙️ Starting arbitrage calculation...")
        try {
          await this.calculateArbitrageOpportunities()
          logger.info("✅ Arbitrage calculation completed.")
        } catch (error) {
          logger.error(`Error during arbitrage calculation: ${error}`)
        } finally {
          this.isCalculating = false
        }
      }
    )

    // Atualizar histórico de preços diariamente às 00:00
    cron.schedule("0 0 * * *", async () => {
      try {
        await this.db.updatePriceHistory()
        logger.info("✅ Price history updated")
      } catch (error) {
        logger.error(`Error updating price history: ${error}`)
      }
    })

    logger.info(
      `📅 Periodic arbitrage calculation started (every ${this.CALCULATION_INTERVAL_MINUTES} minutes)`
    )
  }

  private async calculateArbitrageOpportunities(): Promise<void> {
    const allAlchemyIngredients = await this.db.getAllAlchemyIngredients() // Renomeado
    const cities = await this.db.getAllCities()
    const currentPrices = new Map<string, MarketPrice>() // key: `${ingredientId}-${cityId}`

    // Popular currentPrices map
    for (const ingredient of allAlchemyIngredients) {
      for (const city of cities) {
        const cachedPrice = await this.redis.getCachedMarketPrice(
          `${ingredient.id}-${city.id}`
        )
        if (cachedPrice) {
          currentPrices.set(`${ingredient.id}-${city.id}`, cachedPrice)
        } else {
          const dbPrice = await this.db.getMarketPrice(ingredient.name, city.id)
          if (dbPrice) {
            currentPrices.set(`${ingredient.id}-${city.id}`, dbPrice)
            await this.redis.cacheMarketPrice(
              `${ingredient.id}-${city.id}`,
              dbPrice,
              60 * 5
            ) // Cache se veio do DB
          }
        }
      }
    }

    const opportunities: ArbitrageOpportunity[] = []
    // Buscar todos os ingredientes e cidades
    const allIngredients = allAlchemyIngredients
    for (const base of Array.from(
      new Set(allIngredients.map((ing) => ing.name.split("_")[3]))
    )) {
      const itemTiers = allIngredients.filter((ing) => {
        const b = ing.name.split("_")[3]
        return b === base
      })
      if (itemTiers.length === 0) continue
      const t3 = itemTiers.find((ing) => ing.tier === 3)
      const t5 = itemTiers.find((ing) => ing.tier === 5)
      const t7 = itemTiers.find((ing) => ing.tier === 7)
      for (const buyCity of cities) {
        for (const sellCity of cities) {
          if (buyCity.id === sellCity.id) continue
          // T5 -> 2x T3
          if (t5 && t3) {
            const buy = currentPrices.get(`${t5.id}-${buyCity.id}`)
            const sell = currentPrices.get(`${t3.id}-${sellCity.id}`)
            if (buy && sell) {
              const cost = buy.sell_price_min || 0
              const unitSell = sell.buy_price_max || 0
              if (cost === 0 || unitSell === 0) continue
              const totalSell = unitSell * 2
              const netRevenue = totalSell * (1 - this.SALES_TAX_RATE)
              const netProfit = netRevenue - cost
              const profitMargin = cost > 0 ? (netProfit / cost) * 100 : 0
              opportunities.push({
                id: "",
                sourceIngredientId: t5.id,
                targetIngredientId: t3.id,
                buyCityId: buyCity.id,
                sellCityId: sellCity.id,
                buyPrice: Math.round(cost),
                sellPrice: Math.round(unitSell),
                quantityMultiplier: 2,
                grossProfit: Math.round(totalSell - cost),
                netProfit: Math.round(netProfit),
                profitMargin: parseFloat(profitMargin.toFixed(2)),
                calculatedAt: new Date(),
              })
            }
          }
          // T7 -> 2x T5
          if (t7 && t5) {
            const buy = currentPrices.get(`${t7.id}-${buyCity.id}`)
            const sell = currentPrices.get(`${t5.id}-${sellCity.id}`)
            if (buy && sell) {
              const cost = buy.sell_price_min || 0
              const unitSell = sell.buy_price_max || 0
              if (cost === 0 || unitSell === 0) continue
              const totalSell = unitSell * 2
              const netRevenue = totalSell * (1 - this.SALES_TAX_RATE)
              const netProfit = netRevenue - cost
              const profitMargin = cost > 0 ? (netProfit / cost) * 100 : 0
              opportunities.push({
                id: "",
                sourceIngredientId: t7.id,
                targetIngredientId: t5.id,
                buyCityId: buyCity.id,
                sellCityId: sellCity.id,
                buyPrice: Math.round(cost),
                sellPrice: Math.round(unitSell),
                quantityMultiplier: 2,
                grossProfit: Math.round(totalSell - cost),
                netProfit: Math.round(netProfit),
                profitMargin: parseFloat(profitMargin.toFixed(2)),
                calculatedAt: new Date(),
              })
            }
          }
          // T7 -> 4x T3
          if (t7 && t3) {
            const buy = currentPrices.get(`${t7.id}-${buyCity.id}`)
            const sell = currentPrices.get(`${t3.id}-${sellCity.id}`)
            if (buy && sell) {
              const cost = buy.sell_price_min || 0
              const unitSell = sell.buy_price_max || 0
              if (cost === 0 || unitSell === 0) continue
              const totalSell = unitSell * 4
              const netRevenue = totalSell * (1 - this.SALES_TAX_RATE)
              const netProfit = netRevenue - cost
              const profitMargin = cost > 0 ? (netProfit / cost) * 100 : 0
              opportunities.push({
                id: "",
                sourceIngredientId: t7.id,
                targetIngredientId: t3.id,
                buyCityId: buyCity.id,
                sellCityId: sellCity.id,
                buyPrice: Math.round(cost),
                sellPrice: Math.round(unitSell),
                quantityMultiplier: 4,
                grossProfit: Math.round(totalSell - cost),
                netProfit: Math.round(netProfit),
                profitMargin: parseFloat(profitMargin.toFixed(2)),
                calculatedAt: new Date(),
              })
            }
          }
        }
      }
    }
    // Limpar oportunidades antigas e inserir novas
    await this.db.clearArbitrageOpportunities()
    if (opportunities.length > 0) {
      await this.db.insertArbitrageOpportunities(opportunities)
    }
    // Cache e emitir via Socket.io
    await this.redis.cacheArbitrageOpportunities(opportunities, 60 * 2)
    this.io
      .to("arbitrage_updates")
      .emit("newArbitrageOpportunities", opportunities)
  }

  public async getTopOpportunities(limit: number = 50): Promise<any[]> {
    const cached = await this.redis.getCachedArbitrageOpportunities()
    if (cached && Array.isArray(cached)) return cached.slice(0, limit)
    return await this.db.getTopArbitrageOpportunities(limit)
  }

  public async getFilteredOpportunities(filters: any): Promise<any[]> {
    return await this.db.getArbitrageOpportunitiesByFilters(filters)
  }

  public async getWeeklyAverages(): Promise<any[]> {
    const cached = await this.redis.get("weekly_averages")
    if (cached && Array.isArray(cached)) return cached

    const averages = await this.db.getWeeklyAverages()
    await this.redis.set("weekly_averages", averages, 3600)

    return averages
  }
}
