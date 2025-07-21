// src/services/redis_service.ts
import { createClient, RedisClientType } from "redis"
import { logger } from "../utils/logger"
import { ArbitrageOpportunity, MarketPrice } from "./database_service"

export class RedisService {
  private client: RedisClientType
  private connected: boolean = false

  constructor() {
    this.client = createClient({
      url: process.env.REDIS_URL || "redis://localhost:6379",
    })

    this.client.on("error", (err) => logger.error(`Redis Client Error: ${err}`))
    this.client.on("connect", () => logger.info("✅ Redis connected"))
    this.client.on("end", () => logger.info("📊 Redis disconnected"))
  }

  public async connect(): Promise<void> {
    if (!this.connected) {
      await this.client.connect()
      this.connected = true
    }
  }

  public async disconnect(): Promise<void> {
    if (this.connected) {
      await this.client.disconnect()
      this.connected = false
    }
  }

  public async set(
    key: string,
    value: any,
    ttlSeconds?: number
  ): Promise<void> {
    try {
      const stringValue = JSON.stringify(value)
      if (ttlSeconds) {
        await this.client.setEx(key, ttlSeconds, stringValue)
      } else {
        await this.client.set(key, stringValue)
      }
    } catch (error) {
      logger.error(`Error setting key ${key} in Redis: ${error}`)
    }
  }

  public async get<T>(key: string): Promise<T | null> {
    try {
      const value = await this.client.get(key)
      return value ? (JSON.parse(value) as T) : null
    } catch (error) {
      logger.error(`Error getting key ${key} from Redis: ${error}`)
      return null
    }
  }

  public async cacheMarketPrice(
    key: string,
    price: MarketPrice,
    ttlSeconds: number
  ): Promise<void> {
    await this.set(`market_price:${key}`, price, ttlSeconds)
  }

  public async getCachedMarketPrice(key: string): Promise<MarketPrice | null> {
    return await this.get<MarketPrice>(`market_price:${key}`)
  }

  public async cacheArbitrageOpportunities(
    opportunities: ArbitrageOpportunity[],
    ttlSeconds: number
  ): Promise<void> {
    await this.set("arbitrage_opportunities", opportunities, ttlSeconds)
  }

  public async getCachedArbitrageOpportunities(): Promise<
    ArbitrageOpportunity[] | null
  > {
    return await this.get<ArbitrageOpportunity[]>("arbitrage_opportunities")
  }

  public async incrementCounter(
    key: string,
    ttlSeconds: number = 0
  ): Promise<number> {
    const count = await this.client.incr(key)
    if (ttlSeconds > 0 && count === 1) {
      // Set expiry only if it's the first increment
      await this.client.expire(key, ttlSeconds)
    }
    return count
  }
}
