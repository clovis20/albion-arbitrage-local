const { Pool } = require("pg")

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "albion_arbitrage",
  user: "postgres",
  password: "dexdex123", // Altere para sua senha real do PostgreSQL
})

async function checkArbitrageData() {
  try {
    console.log("🔍 Verificando dados de arbitragem...")

    // Verificar se há oportunidades de arbitragem
    const arbitrageResult = await pool.query(
      "SELECT COUNT(*) FROM arbitrage_opportunities"
    )
    console.log(
      `📊 Oportunidades de arbitragem: ${arbitrageResult.rows[0].count}`
    )

    if (arbitrageResult.rows[0].count > 0) {
      const topOpportunities = await pool.query(`
        SELECT 
          ao.id,
          si.name as item_name,
          bc.name as buy_city,
          sc.name as sell_city,
          ao.buy_price,
          ao.sell_price,
          ao.net_profit as profit,
          ao.profit_margin as profit_percentage,
          ao.calculated_at as updated_at
        FROM arbitrage_opportunities ao
        JOIN alchemy_ingredients si ON ao.source_ingredient_id = si.id
        JOIN cities bc ON ao.buy_city_id = bc.id
        JOIN cities sc ON ao.sell_city_id = sc.id
        ORDER BY ao.net_profit DESC
        LIMIT 5;
      `)

      console.log("🏆 Top 5 oportunidades:")
      topOpportunities.rows.forEach((opp, index) => {
        console.log(
          `${index + 1}. ${opp.item_name} - ${opp.buy_city} → ${
            opp.sell_city
          } (Lucro: ${opp.profit} prata)`
        )
      })
    }

    // Verificar dados de mercado
    const marketResult = await pool.query("SELECT COUNT(*) FROM market_prices")
    console.log(`💰 Preços de mercado: ${marketResult.rows[0].count}`)

    // Verificar ingredientes
    const ingredientsResult = await pool.query(
      "SELECT COUNT(*) FROM alchemy_ingredients"
    )
    console.log(`🧪 Ingredientes: ${ingredientsResult.rows[0].count}`)

    // Verificar cidades
    const citiesResult = await pool.query("SELECT COUNT(*) FROM cities")
    console.log(`🏙️ Cidades: ${citiesResult.rows[0].count}`)
  } catch (error) {
    console.error("❌ Erro:", error)
  } finally {
    await pool.end()
  }
}

checkArbitrageData()
