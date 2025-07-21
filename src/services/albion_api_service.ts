import axios from "axios"
import { logger } from "../utils/logger"
import { DatabaseService } from "./database_service"

export interface AlbionMarketData {
  item_id: string
  city: string
  quality: number
  sell_price_min: number
  sell_price_max: number
  buy_price_max: number
  updated_at: string
}

export class AlbionAPIService {
  private baseURL = "https://www.albion-online-data.com/api/v2"
  private databaseService: DatabaseService
  private isRunning = false

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService
  }

  async getMarketPrices(
    itemTypeId: string,
    locations: string[] = [
      "Bridgewatch",
      "Martlock",
      "Thetford",
      "Fort Sterling",
      "Lymhurst",
      "Caerleon",
    ]
  ) {
    try {
      const response = await axios.get(
        `${this.baseURL}/stats/prices/${itemTypeId}`,
        {
          params: {
            locations: locations.join(","),
          },
        }
      )

      logger.info(
        `✅ Fetched market data for ${itemTypeId}: ${response.data.length} records`
      )
      return response.data as AlbionMarketData[]
    } catch (error) {
      logger.error(`Error fetching market data for ${itemTypeId}: ${error}`)
      return []
    }
  }

  async getMarketHistory(
    itemTypeId: string,
    location: string,
    quality: number = 1
  ) {
    try {
      const response = await axios.get(
        `${this.baseURL}/stats/history/${itemTypeId}`,
        {
          params: {
            location,
            quality,
          },
        }
      )

      logger.info(
        `✅ Fetched history for ${itemTypeId} in ${location}: ${response.data.length} records`
      )
      return response.data
    } catch (error) {
      logger.error(`Error fetching history for ${itemTypeId}: ${error}`)
      return []
    }
  }

  async getGoldPrice() {
    try {
      const response = await axios.get(`${this.baseURL}/stats/gold`)
      return response.data
    } catch (error) {
      logger.error(`Error fetching gold price: ${error}`)
      return null
    }
  }

  async processMarketData() {
    if (this.isRunning) {
      logger.warn("⚠️ Market data processing already running")
      return
    }

    this.isRunning = true
    logger.info("🔄 Starting market data processing...")

    try {
      // Lista de itens de alquimia específicos
      const itemsToFetch = [
        // Shadow Claws (Panther)
        "T3_ALCHEMY_RARE_PANTHER",
        "T5_ALCHEMY_RARE_PANTHER",
        "T7_ALCHEMY_RARE_PANTHER",

        // Sylvian Root (Ent)
        "T3_ALCHEMY_RARE_ENT",
        "T5_ALCHEMY_RARE_ENT",
        "T7_ALCHEMY_RARE_ENT",

        // Spirit Paws (Direbear)
        "T3_ALCHEMY_RARE_DIREBEAR",
        "T5_ALCHEMY_RARE_DIREBEAR",
        "T7_ALCHEMY_RARE_DIREBEAR",

        // Werewolf Fangs (Werewolf)
        "T3_ALCHEMY_RARE_WEREWOLF",
        "T5_ALCHEMY_RARE_WEREWOLF",
        "T7_ALCHEMY_RARE_WEREWOLF",

        // Imp's Horn (Imp)
        "T3_ALCHEMY_RARE_IMP",
        "T5_ALCHEMY_RARE_IMP",
        "T7_ALCHEMY_RARE_IMP",

        // Runestone Tooth (Elemental)
        "T3_ALCHEMY_RARE_ELEMENTAL",
        "T5_ALCHEMY_RARE_ELEMENTAL",
        "T7_ALCHEMY_RARE_ELEMENTAL",

        // Dawnfeather (Eagle)
        "T3_ALCHEMY_RARE_EAGLE",
        "T5_ALCHEMY_RARE_EAGLE",
        "T7_ALCHEMY_RARE_EAGLE",
      ]

      const cities = [
        "Bridgewatch",
        "Martlock",
        "Thetford",
        "Fort Sterling",
        "Lymhurst",
        "Caerleon",
      ]

      for (const itemId of itemsToFetch) {
        try {
          const marketData = await this.getMarketPrices(itemId, cities)

          // Processar e salvar dados
          for (const data of marketData) {
            await this.saveMarketData(data)
          }

          // Aguardar um pouco entre requisições para não sobrecarregar a API
          await new Promise((resolve) => setTimeout(resolve, 1000))
        } catch (error) {
          logger.error(`Error processing ${itemId}: ${error}`)
        }
      }

      logger.info("✅ Market data processing completed")
    } catch (error) {
      logger.error(`Error in market data processing: ${error}`)
    } finally {
      this.isRunning = false
    }
  }

  private async saveMarketData(data: AlbionMarketData) {
    try {
      // Mapear cidade para city_id
      const cityMap: { [key: string]: number } = {
        Bridgewatch: 1,
        Martlock: 2,
        Thetford: 3,
        "Fort Sterling": 4,
        Lymhurst: 5,
        Caerleon: 6,
      }

      const cityId = cityMap[data.city]
      if (!cityId) {
        logger.warn(`⚠️ Unknown city: ${data.city}`)
        return
      }

      // Inserir/atualizar dados de preço
      await this.databaseService.upsertMarketPrice({
        item_type_id: data.item_id,
        city_id: cityId,
        quality: data.quality,
        sell_price_min: data.sell_price_min,
        sell_price_max: data.sell_price_max,
        buy_price_max: data.buy_price_max,
      })

      // Inserir no histórico (vou criar este método)
      await this.databaseService.insertPriceHistoryRecord({
        item_type_id: data.item_id,
        city_id: cityId,
        quality: data.quality,
        price: data.sell_price_min,
      })
    } catch (error) {
      logger.error(`Error saving market data for ${data.item_id}: ${error}`)
    }
  }

  startPeriodicDataFetch(intervalMinutes: number = 5) {
    logger.info(
      `📅 Starting periodic data fetch every ${intervalMinutes} minutes`
    )

    // Executar imediatamente
    this.processMarketData()

    // Configurar intervalo
    setInterval(() => {
      this.processMarketData()
    }, intervalMinutes * 60 * 1000)
  }
}
