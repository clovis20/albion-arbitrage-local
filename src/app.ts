// Conteúdo do backend_main_app.ts (última versão que te enviei)
import express from "express"
import cors from "cors"
import helmet from "helmet"
import { createServer } from "http"
import { Server } from "socket.io"
import dotenv from "dotenv"

import { DatabaseService } from "./services/database_service"
import { RedisService } from "./services/redis_service"
// Removido NATS - usando API REST
import { ArbitrageService } from "./services/arbitrage_service"
import { AlbionAPIService } from "./services/albion_api_service"
import { logger } from "./utils/logger"

// Se você tiver rotas definidas, inclua-as. Por enquanto, vazias.
import createMarketRoutes from "./routes/marketRoutes"
import createArbitrageRoutes from "./routes/arbitrageRoutes"

dotenv.config()

class App {
  private app: express.Application
  private server: any
  private io: Server

  private databaseService!: DatabaseService
  private redisService!: RedisService
  // Removido NATS - usando API REST
  private arbitrageService!: ArbitrageService
  private albionAPIService!: AlbionAPIService

  constructor() {
    this.app = express()
    this.server = createServer(this.app)
    this.io = new Server(this.server, {
      cors: {
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    })

    this.initializeServices()
    this.setupMiddleware()
    this.setupRoutes()
    this.setupSocketIO() // Certifique-se de que a inicialização do Socket.io está correta
  }

  private initializeServices() {
    this.databaseService = new DatabaseService()
    this.redisService = new RedisService()
    // Inicializa AlbionAPIService
    this.albionAPIService = new AlbionAPIService(this.databaseService)
    // Inicializa ArbitrageService sem NATS
    this.arbitrageService = new ArbitrageService(
      this.databaseService,
      this.redisService,
      this.io,
      undefined as any // NATS removido
    )
  }

  private setupMiddleware() {
    this.app.use(
      cors({
        origin: process.env.FRONTEND_URL || "http://localhost:3000", // Define o CORS
      })
    )
    this.app.use(helmet())
    this.app.use(express.json()) // Para parsear JSON no corpo das requisições
  }

  private setupRoutes() {
    // Exemplo de rota de saúde
    this.app.get("/health", (req, res) => {
      res.status(200).send("Backend is healthy")
    })

    // Use as rotas que você definiu (mesmo que vazias por enquanto)
    this.app.use("/api/market", createMarketRoutes(this.databaseService))
    this.app.use(
      "/api/arbitrage",
      createArbitrageRoutes(this.databaseService, this.arbitrageService)
    )
  }

  private setupSocketIO() {
    this.io.on("connection", (socket) => {
      logger.info(`Client connected: ${socket.id}`)
      socket.on("disconnect", () => {
        logger.info(`Client disconnected: ${socket.id}`)
      })
      // Adicionar ao room de arbitragem para receber updates
      socket.join("arbitrage_updates")
      socket.join("market_updates") // Opcional, se quiser updates de mercado mais granulares
    })
  }

  public async start() {
    try {
      await this.databaseService.connect()
      await this.redisService.connect()
      // NATS removido - usando API REST

      // Iniciar busca de dados da API do Albion
      this.albionAPIService.startPeriodicDataFetch(5) // Buscar dados a cada 5 minutos

      this.arbitrageService.startPeriodicCalculation()

      const PORT = process.env.PORT || 5000
      this.server.listen(PORT, () => {
        logger.info(`🚀 Server running on port ${PORT}`)
        logger.info(`📊 Albion Arbitrage Calculator Backend started`)
      })
    } catch (error) {
      logger.error(`Failed to start application: ${error}`)
      process.exit(1)
    }
  }

  public async stop() {
    logger.info("Shutting down application...")

    // NATS removido
    await this.redisService.disconnect()
    await this.databaseService.disconnect()

    this.server.close(() => {
      logger.info("Application shut down complete")
    })
  }
}

const app = new App()
app.start()

export default app
