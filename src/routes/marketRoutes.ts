// src/routes/marketRoutes.ts
import { Router, Request, Response } from "express"
import { DatabaseService } from "../services/database_service"

// Função que cria as rotas recebendo o DatabaseService como parâmetro
export default function createMarketRoutes(db: DatabaseService) {
  const router = Router()

  // Exemplo de rota, você pode preencher depois
  router.get("/", (req, res) => {
    res.send("Market routes are working!")
  })

  // Buscar todos os preços de mercado
  router.get("/prices", async (req: Request, res: Response) => {
    try {
      const { ingredient, city } = req.query

      // Se não especificar ingrediente/cidade, retornar todos os preços
      if (!ingredient && !city) {
        const query = `
          SELECT mp.*, c.name as city_name, ai.name as ingredient_name
          FROM market_prices mp
          JOIN cities c ON mp.city_id = c.id
          JOIN alchemy_ingredients ai ON mp.item_type_id = ai.name
          ORDER BY mp.updated_at DESC
          LIMIT 100
        `
        const result = await db.executeQuery(query)
        return res.json(result.rows)
      }

      // Busca específica por ingrediente/cidade
      if (!ingredient || !city) {
        return res.status(400).json({
          error: "ingredient and city are required for specific search",
        })
      }
      const ingredientObj = await db.getAlchemyIngredientByName(
        ingredient as string
      )
      if (!ingredientObj) {
        return res.status(404).json({ error: "Ingredient not found" })
      }
      const cityObj = await db.getCityByCode(city as string)
      if (!cityObj) {
        return res.status(404).json({ error: "City not found" })
      }
      const price = await db.getMarketPrice(ingredientObj.name, cityObj.id)
      return res.json({ price })
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" })
    }
  })

  // Buscar histórico de preços (diário/semanal/mensal)
  router.get("/history", async (req: Request, res: Response) => {
    try {
      const { ingredient, city, period } = req.query
      if (!ingredient || !city) {
        return res
          .status(400)
          .json({ error: "ingredient and city are required" })
      }
      // Exemplo: buscar histórico semanal
      if (period === "weekly") {
        const weekly = await db.getWeeklyAverages()
        // Filtrar por ingrediente e cidade se fornecido
        const filtered = weekly.filter(
          (row: any) =>
            row.ingredient_name === ingredient && row.city_code === city
        )
        return res.json({ history: filtered })
      }
      // TODO: Adicionar outros períodos (diário/mensal) se necessário
      return res.status(400).json({ error: "Unsupported period" })
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" })
    }
  })

  // Listar todos os ingredientes de alquimia
  router.get("/ingredients", async (req: Request, res: Response) => {
    try {
      const ingredients = await db.getAllAlchemyIngredients()
      return res.json(ingredients)
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" })
    }
  })

  // Listar todas as cidades disponíveis
  router.get("/cities", async (req: Request, res: Response) => {
    try {
      const cities = await db.getAllCities()
      return res.json(cities)
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" })
    }
  })

  return router
}
