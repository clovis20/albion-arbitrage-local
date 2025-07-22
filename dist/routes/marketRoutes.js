"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createMarketRoutes;
const express_1 = require("express");
function createMarketRoutes(db) {
    const router = (0, express_1.Router)();
    router.get("/", (req, res) => {
        res.send("Market routes are working!");
    });
    router.get("/prices", async (req, res) => {
        try {
            const { ingredient, city } = req.query;
            if (!ingredient && !city) {
                const query = `
          SELECT mp.*, c.name as city_name, ai.name as ingredient_name
          FROM market_prices mp
          JOIN cities c ON mp.city_id = c.id
          JOIN alchemy_ingredients ai ON mp.item_type_id = ai.name
          ORDER BY mp.updated_at DESC
          LIMIT 100
        `;
                const result = await db.executeQuery(query);
                return res.json(result.rows);
            }
            if (!ingredient || !city) {
                return res.status(400).json({
                    error: "ingredient and city are required for specific search",
                });
            }
            const ingredientObj = await db.getAlchemyIngredientByName(ingredient);
            if (!ingredientObj) {
                return res.status(404).json({ error: "Ingredient not found" });
            }
            const cityObj = await db.getCityByCode(city);
            if (!cityObj) {
                return res.status(404).json({ error: "City not found" });
            }
            const price = await db.getMarketPrice(ingredientObj.name, cityObj.id);
            return res.json({ price });
        }
        catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    });
    router.get("/history", async (req, res) => {
        try {
            const { ingredient, city, period } = req.query;
            if (!ingredient || !city) {
                return res
                    .status(400)
                    .json({ error: "ingredient and city are required" });
            }
            if (period === "weekly") {
                const weekly = await db.getWeeklyAverages();
                const filtered = weekly.filter((row) => row.ingredient_name === ingredient && row.city_code === city);
                return res.json({ history: filtered });
            }
            return res.status(400).json({ error: "Unsupported period" });
        }
        catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    });
    router.get("/ingredients", async (req, res) => {
        try {
            const ingredients = await db.getAllAlchemyIngredients();
            return res.json(ingredients);
        }
        catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    });
    router.get("/cities", async (req, res) => {
        try {
            const cities = await db.getAllCities();
            return res.json(cities);
        }
        catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    });
    return router;
}
//# sourceMappingURL=marketRoutes.js.map