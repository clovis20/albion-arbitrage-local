const { Pool } = require("pg")
require("dotenv").config()

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  database: process.env.DB_NAME || "albion_arbitrage",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "",
})

async function fixDatabase() {
  const client = await pool.connect()

  try {
    console.log("🔧 Corrigindo estrutura do banco de dados...")

    // 1. Recriar tabela market_prices
    console.log("📊 Recriando tabela market_prices...")
    await client.query(`
      DROP TABLE IF EXISTS market_prices CASCADE;
      
      CREATE TABLE market_prices (
        id SERIAL PRIMARY KEY,
        item_type_id VARCHAR(100) NOT NULL,
        city_id INTEGER NOT NULL,
        quality INTEGER DEFAULT 1,
        sell_price_min INTEGER,
        sell_price_max INTEGER,
        buy_price_max INTEGER,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(item_type_id, city_id, quality)
      );
    `)

    // 2. Criar índices
    console.log("📈 Criando índices...")
    await client.query(`
      CREATE INDEX idx_market_prices_item_type_id ON market_prices(item_type_id);
      CREATE INDEX idx_market_prices_city_id ON market_prices(city_id);
      CREATE INDEX idx_market_prices_updated_at ON market_prices(updated_at);
    `)

    // 3. Recriar tabela price_history
    console.log("📈 Recriando tabela price_history...")
    await client.query(`
      DROP TABLE IF EXISTS price_history CASCADE;
      
      CREATE TABLE price_history (
        id SERIAL PRIMARY KEY,
        item_type_id VARCHAR(100) NOT NULL,
        city_id INTEGER NOT NULL,
        quality INTEGER DEFAULT 1,
        price INTEGER NOT NULL,
        recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE INDEX idx_price_history_item_type_id ON price_history(item_type_id);
      CREATE INDEX idx_price_history_city_id ON price_history(city_id);
      CREATE INDEX idx_price_history_recorded_at ON price_history(recorded_at);
    `)

    // 4. Recriar tabela arbitrage_opportunities
    console.log("💰 Recriando tabela arbitrage_opportunities...")
    await client.query(`
      DROP TABLE IF EXISTS arbitrage_opportunities CASCADE;
      
      CREATE TABLE arbitrage_opportunities (
        id SERIAL PRIMARY KEY,
        source_ingredient_id INTEGER NOT NULL,
        target_ingredient_id INTEGER NOT NULL,
        buy_city_id INTEGER NOT NULL,
        sell_city_id INTEGER NOT NULL,
        buy_price INTEGER NOT NULL,
        sell_price INTEGER NOT NULL,
        quantity_multiplier INTEGER NOT NULL,
        gross_profit INTEGER NOT NULL,
        net_profit INTEGER NOT NULL,
        profit_margin DECIMAL(5,2) NOT NULL,
        calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE INDEX idx_arbitrage_source_ingredient ON arbitrage_opportunities(source_ingredient_id);
      CREATE INDEX idx_arbitrage_target_ingredient ON arbitrage_opportunities(target_ingredient_id);
      CREATE INDEX idx_arbitrage_cities ON arbitrage_opportunities(buy_city_id, sell_city_id);
      CREATE INDEX idx_arbitrage_profit_margin ON arbitrage_opportunities(profit_margin);
    `)

    // 5. Recriar tabela alchemy_ingredients
    console.log("🧪 Recriando tabela alchemy_ingredients...")
    await client.query(`
      DROP TABLE IF EXISTS alchemy_ingredients CASCADE;
      
      CREATE TABLE alchemy_ingredients (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) UNIQUE NOT NULL,
        tier INTEGER NOT NULL,
        quality VARCHAR(50) DEFAULT 'NORMAL',
        transmutation_result JSONB
      );
    `)

    // 6. Inserir ingredientes de alquimia
    console.log("🧪 Inserindo ingredientes de alquimia...")
    await client.query(`
      INSERT INTO alchemy_ingredients (name, tier, quality, transmutation_result) VALUES
      -- Shadow Claws (Panther)
      ('T3_ALCHEMY_RARE_PANTHER', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_PANTHER", "quantity": 1}]'),
      ('T5_ALCHEMY_RARE_PANTHER', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_PANTHER", "quantity": 1}]'),
      ('T7_ALCHEMY_RARE_PANTHER', 7, 'RARE', NULL),
      
      -- Sylvian Root (Ent)
      ('T3_ALCHEMY_RARE_ENT', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_ENT", "quantity": 1}]'),
      ('T5_ALCHEMY_RARE_ENT', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_ENT", "quantity": 1}]'),
      ('T7_ALCHEMY_RARE_ENT', 7, 'RARE', NULL),
      
      -- Spirit Paws (Direbear)
      ('T3_ALCHEMY_RARE_DIREBEAR', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_DIREBEAR", "quantity": 1}]'),
      ('T5_ALCHEMY_RARE_DIREBEAR', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_DIREBEAR", "quantity": 1}]'),
      ('T7_ALCHEMY_RARE_DIREBEAR', 7, 'RARE', NULL),
      
      -- Werewolf Fangs (Werewolf)
      ('T3_ALCHEMY_RARE_WEREWOLF', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_WEREWOLF", "quantity": 1}]'),
      ('T5_ALCHEMY_RARE_WEREWOLF', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_WEREWOLF", "quantity": 1}]'),
      ('T7_ALCHEMY_RARE_WEREWOLF', 7, 'RARE', NULL),
      
      -- Imp's Horn (Imp)
      ('T3_ALCHEMY_RARE_IMP', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_IMP", "quantity": 1}]'),
      ('T5_ALCHEMY_RARE_IMP', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_IMP", "quantity": 1}]'),
      ('T7_ALCHEMY_RARE_IMP', 7, 'RARE', NULL),
      
      -- Runestone Tooth (Elemental)
      ('T3_ALCHEMY_RARE_ELEMENTAL', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_ELEMENTAL", "quantity": 1}]'),
      ('T5_ALCHEMY_RARE_ELEMENTAL', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_ELEMENTAL", "quantity": 1}]'),
      ('T7_ALCHEMY_RARE_ELEMENTAL', 7, 'RARE', NULL),
      
      -- Dawnfeather (Eagle)
      ('T3_ALCHEMY_RARE_EAGLE', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_EAGLE", "quantity": 1}]'),
      ('T5_ALCHEMY_RARE_EAGLE', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_EAGLE", "quantity": 1}]'),
      ('T7_ALCHEMY_RARE_EAGLE', 7, 'RARE', NULL);
    `)

    // 7. Recriar tabela cities
    console.log("🏙️ Recriando tabela cities...")
    await client.query(`
      DROP TABLE IF EXISTS cities CASCADE;
      
      CREATE TABLE cities (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        code VARCHAR(50) UNIQUE NOT NULL
      );
      
      INSERT INTO cities (name, code) VALUES
      ('Bridgewatch', '1'),
      ('Martlock', '2'),
      ('Thetford', '3'),
      ('Fort Sterling', '4'),
      ('Lymhurst', '5'),
      ('Caerleon', '6');
    `)

    console.log("✅ Estrutura do banco corrigida com sucesso!")
  } catch (error) {
    console.error("❌ Erro ao corrigir banco:", error)
  } finally {
    client.release()
    await pool.end()
  }
}

fixDatabase()
