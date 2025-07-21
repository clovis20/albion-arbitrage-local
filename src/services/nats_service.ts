// src/services/nats_service.ts
import { connect, NatsConnection, JSONCodec, Subscription } from "nats"
import { logger } from "../utils/logger"
import { ArbitrageService } from "./arbitrage_service"

export interface MarketOrder {
  Id: string
  ItemTypeId: string
  // Adicionado ItemGroupTypeId e EnchantmentLevel, conforme snippet do backend_package.json
  ItemGroupTypeId: string
  LocationId: number
  QualityLevel: number // 1=Normal, 2=Good, 3=Outstanding, etc.
  EnchantmentLevel: number // Ex: 0 for .0, 1 for .1, etc.
  UnitPriceSilver: number
  Amount: number
  AuctionType: "request" | "offer" // 'request' = buy order, 'offer' = sell order
  Expires: string
}

export interface MarketData {
  Orders?: MarketOrder[]
  // Outros tipos de dados (MarketHistories, GoldPrices, etc.)
}

export class NATSService {
  private nc: NatsConnection | null = null
  private jsonCodec = JSONCodec()
  private arbitrageService: ArbitrageService
  private subscriptions: Subscription[] = []

  private readonly CITY_MAP: { [key: string]: string } = {
    "0007": "THETFORD",
    "1002": "LYMHURST",
    "2004": "BRIDGEWATCH",
    "3005": "FORT_STERLING",
    "4002": "MARTLOCK",
    "3003": "CAERLEON",
  }

  // Mapeamento dos ItemTypeId base para um nome de "família" de alquimia
  private readonly BASE_ALCHEMY_TYPE_MAP: { [key: string]: string } = {
    ALCHEMY_RARE_PANTHER: "SHADOW CLAWS",
    ALCHEMY_RARE_ENT: "SYLVIAN ROOT",
    ALCHEMY_RARE_DIREBEAR: "SPIRIT PAWS",
    ALCHEMY_RARE_WEREWOLF: "WEREWOLF FANGS",
    ALCHEMY_RARE_IMP: "IMP'S HORN",
    ALCHEMY_RARE_ELEMENTAL: "RUNESTONE TOOTH",
    ALCHEMY_RARE_EAGLE: "DAWNFEATHER",
  }

  // Lista dos ItemTypeIds completos (T3, T5, T7) que queremos monitorar
  private readonly MONITORED_ITEM_TYPES = new Set<string>([
    // SHADOW CLAWS
    "T3_ALCHEMY_RARE_PANTHER", // RUGGED SHADOW CLAWS
    "T5_ALCHEMY_RARE_PANTHER", // FINE SHADOW CLAWS
    "T7_ALCHEMY_RARE_PANTHER", // EXCELLENT SHADOW CLAWS

    // SYLVIAN ROOT
    "T3_ALCHEMY_RARE_ENT", // RUGGED SYLVIAN ROOT
    "T5_ALCHEMY_RARE_ENT", // FINE SYLVIAN ROOT
    "T7_ALCHEMY_RARE_ENT", // EXCELLENT SYLVIAN ROOT

    // SPIRIT PAWS
    "T3_ALCHEMY_RARE_DIREBEAR", // RUGGED SPIRIT PAWS
    "T5_ALCHEMY_RARE_DIREBEAR", // FINE SPIRIT PAWS
    "T7_ALCHEMY_RARE_DIREBEAR", // EXCELLENT SPIRIT PAWS

    // WEREWOLF FANGS
    "T3_ALCHEMY_RARE_WEREWOLF", // RUGGED WEREWOLF FANGS
    "T5_ALCHEMY_RARE_WEREWOLF", // FINE WEREWOLF FANGS
    "T7_ALCHEMY_RARE_WEREWOLF", // EXCELLENT WEREWOLF FANGS

    // IMP'S HORN
    "T3_ALCHEMY_RARE_IMP", // RUGGED IMP\'S HORN
    "T5_ALCHEMY_RARE_IMP", // FINE IMP\'S HORN
    "T7_ALCHEMY_RARE_IMP", // EXCELLENT IMP\'S HORN

    // RUNESTONE TOOTH
    "T3_ALCHEMY_RARE_ELEMENTAL", // RUGGED RUNESTONE TOOTH
    "T5_ALCHEMY_RARE_ELEMENTAL", // FINE RUNESTONE TOOTH
    "T7_ALCHEMY_RARE_ELEMENTAL", // EXCELLENT RUNESTONE TOOTH

    // DAWNFEATHER
    "T3_ALCHEMY_RARE_EAGLE", // RUGGED DAWNFEATHER
    "T5_ALCHEMY_RARE_EAGLE", // FINE DAWNFEATHER
    "T7_ALCHEMY_RARE_EAGLE", // EXCELLENT DAWNFEATHER
  ])

  constructor(arbitrageService: ArbitrageService) {
    this.arbitrageService = arbitrageService
  }

  public async connect(): Promise<void> {
    try {
      const natsUrl =
        process.env.NATS_URL ||
        "nats://public:thenewalbiondata@nats.albion-online-data.com:4222"
      this.nc = await connect({ servers: natsUrl })
      logger.info(`✅ Connected to NATS at ${natsUrl}`)
      this.subscribeToMarketOrders()
    } catch (error) {
      logger.error(`❌ Error connecting to NATS: ${error}`)
      logger.warn("⚠️ Backend will continue without real-time market data")
      // Não encerra o processo, apenas loga o erro
      // process.exit(1)
    }
  }

  public async disconnect(): Promise<void> {
    if (this.nc) {
      for (const sub of this.subscriptions) {
        sub.unsubscribe()
      }
      await this.nc.drain()
      await this.nc.close()
      logger.info("📊 Disconnected from NATS")
    }
  }

  private subscribeToMarketOrders(): void {
    if (!this.nc) {
      logger.error("NATS connection not established.")
      return
    }

    const sub = this.nc.subscribe("marketorders.deduped")
    this.subscriptions.push(sub)
    logger.info('👂 Subscribed to "marketorders.deduped" topic')
    ;(async () => {
      for await (const m of sub) {
        try {
          const data: MarketData = this.jsonCodec.decode(m.data) as MarketData
          if (data.Orders) {
            data.Orders = data.Orders.filter((order) =>
              this.MONITORED_ITEM_TYPES.has(order.ItemTypeId)
            )
            if (data.Orders.length > 0) {
              await this.arbitrageService.processMarketData(data)
            }
          }
        } catch (error) {
          logger.error(`Error processing NATS message: ${error}`)
        }
      }
    })()
  }

  public getCityCode(locationId: number): string | null {
    return (this.CITY_MAP as any)[locationId.toString()] || null
  }

  public mapItemTypeIdToAlchemyIngredientName(
    itemTypeId: string
  ): string | null {
    const parts = itemTypeId.split("_")
    const tier = parseInt(parts[0].replace("T", "")) // Extract Tier (e.g., 3, 5, 7)
    const baseItemTypeId = parts.slice(1).join("_") // Get the base type (e.g., ALCHEMY_RARE_PANTHER)

    const baseAlchemyName = this.BASE_ALCHEMY_TYPE_MAP[baseItemTypeId]
    if (!baseAlchemyName) {
      return null // Not an alchemy ingredient we are monitoring
    }

    let prefix: string
    switch (tier) {
      case 3:
        prefix = "RUGGED"
        break
      case 5:
        prefix = "FINE"
        break
      case 7:
        prefix = "EXCELLENT"
        break
      default:
        return null // Tier not recognized for these items
    }

    // Handle specific naming for SHADOW CLAWS for T5 (FINED vs FINE)
    if (baseAlchemyName === "SHADOW CLAWS" && tier === 5) {
      return `FINED ${baseAlchemyName}`
    }

    // Handle specific naming for EXCELLENT SHADOW CLAWS (user provided as EXCELLENT SHADOW CLAWS for T7)
    // If the user's list has "EXCELLENT SHADOW CLAWS" for T7, then the current logic `prefix + ' ' + baseAlchemyName` will produce it.
    // If the user intended "EXCELLENT SYLVIAN ROOT" to be "EXCELLENT SHADOW CLAWS" for T7, this needs correction in their list.
    // Based on the provided list "EXCELLENT SHADOW CLAWS - T7_ALCHEMY_RARE_ENT" it means there is a typo in the user's list.
    // It should be "EXCELLENT SYLVIAN ROOT - T7_ALCHEMY_RARE_ENT".
    // I will follow the pattern "EXCELLENT + baseName" for now.

    // Correct for the typo provided: "EXCELLENT SHADOW CLAWS - T7_ALCHEMY_RARE_ENT"
    // This should probably be "EXCELLENT SYLVIAN ROOT - T7_ALCHEMY_RARE_ENT"
    if (itemTypeId === "T7_ALCHEMY_RARE_ENT") {
      return `EXCELLENT SYLVIAN ROOT`
    }

    return `${prefix} ${baseAlchemyName}`
  }
}
