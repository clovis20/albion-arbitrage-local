"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const dotenv_1 = __importDefault(require("dotenv"));
const database_service_1 = require("./services/database_service");
const arbitrage_service_1 = require("./services/arbitrage_service");
const albion_api_service_1 = require("./services/albion_api_service");
const logger_1 = require("./utils/logger");
const marketRoutes_1 = __importDefault(require("./routes/marketRoutes"));
const arbitrageRoutes_1 = __importDefault(require("./routes/arbitrageRoutes"));
dotenv_1.default.config();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.server = (0, http_1.createServer)(this.app);
        this.io = new socket_io_1.Server(this.server, {
            cors: {
                origin: process.env.FRONTEND_URL || "http://localhost:3000",
                methods: ["GET", "POST"],
            },
        });
        this.initializeServices();
        this.setupMiddleware();
        this.setupRoutes();
        this.setupSocketIO();
    }
    initializeServices() {
        this.databaseService = new database_service_1.DatabaseService();
        this.albionAPIService = new albion_api_service_1.AlbionAPIService(this.databaseService);
        this.arbitrageService = new arbitrage_service_1.ArbitrageService(this.databaseService, this.io, undefined);
    }
    setupMiddleware() {
        this.app.use((0, cors_1.default)({
            origin: "*",
        }));
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.json());
    }
    setupRoutes() {
        this.app.get("/health", (req, res) => {
            res.status(200).send("Backend is healthy");
        });
        this.app.use("/api/market", (0, marketRoutes_1.default)(this.databaseService));
        this.app.use("/api/arbitrage", (0, arbitrageRoutes_1.default)(this.databaseService, this.arbitrageService));
    }
    setupSocketIO() {
        this.io.on("connection", (socket) => {
            logger_1.logger.info(`Client connected: ${socket.id}`);
            socket.on("disconnect", () => {
                logger_1.logger.info(`Client disconnected: ${socket.id}`);
            });
            socket.join("arbitrage_updates");
            socket.join("market_updates");
        });
    }
    async start() {
        try {
            await this.databaseService.connect();
            this.albionAPIService.startPeriodicDataFetch(5);
            this.arbitrageService.startPeriodicCalculation();
            const PORT = process.env.PORT || 5000;
            this.server.listen(PORT, () => {
                logger_1.logger.info(`🚀 Server running on port ${PORT}`);
                logger_1.logger.info(`📊 Albion Arbitrage Calculator Backend started`);
            });
        }
        catch (error) {
            logger_1.logger.error(`Failed to start application: ${error}`);
            process.exit(1);
        }
    }
    async stop() {
        logger_1.logger.info("Shutting down application...");
        await this.databaseService.disconnect();
        this.server.close(() => {
            logger_1.logger.info("Application shut down complete");
        });
    }
}
const app = new App();
app.start();
exports.default = app;
//# sourceMappingURL=app.js.map