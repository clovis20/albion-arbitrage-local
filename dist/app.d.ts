declare class App {
    private app;
    private server;
    private io;
    private databaseService;
    private arbitrageService;
    private albionAPIService;
    constructor();
    private initializeServices;
    private setupMiddleware;
    private setupRoutes;
    private setupSocketIO;
    start(): Promise<void>;
    stop(): Promise<void>;
}
declare const app: App;
export default app;
//# sourceMappingURL=app.d.ts.map