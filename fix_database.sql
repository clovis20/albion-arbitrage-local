-- Script para verificar e corrigir a estrutura da tabela market_prices

-- 1. Verificar a estrutura atual da tabela
\d market_prices;

-- 2. Se a tabela não existir ou tiver estrutura incorreta, recriar
DROP TABLE IF EXISTS market_prices CASCADE;

-- 3. Criar a tabela com a estrutura correta
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

-- 4. Criar índices para performance
CREATE INDEX idx_market_prices_item_type_id ON market_prices(item_type_id);
CREATE INDEX idx_market_prices_city_id ON market_prices(city_id);
CREATE INDEX idx_market_prices_updated_at ON market_prices(updated_at);

-- 5. Verificar se a tabela price_history existe
DROP TABLE IF EXISTS price_history CASCADE;

CREATE TABLE price_history (
    id SERIAL PRIMARY KEY,
    item_type_id VARCHAR(100) NOT NULL,
    city_id INTEGER NOT NULL,
    quality INTEGER DEFAULT 1,
    price INTEGER NOT NULL,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Criar índices para price_history
CREATE INDEX idx_price_history_item_type_id ON price_history(item_type_id);
CREATE INDEX idx_price_history_city_id ON price_history(city_id);
CREATE INDEX idx_price_history_recorded_at ON price_history(recorded_at);

-- 7. Verificar se a tabela arbitrage_opportunities existe
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

-- 8. Criar índices para arbitrage_opportunities
CREATE INDEX idx_arbitrage_source_ingredient ON arbitrage_opportunities(source_ingredient_id);
CREATE INDEX idx_arbitrage_target_ingredient ON arbitrage_opportunities(target_ingredient_id);
CREATE INDEX idx_arbitrage_cities ON arbitrage_opportunities(buy_city_id, sell_city_id);
CREATE INDEX idx_arbitrage_profit_margin ON arbitrage_opportunities(profit_margin);

-- 9. Verificar se as tabelas de ingredientes e cidades existem
DROP TABLE IF EXISTS alchemy_ingredients CASCADE;

CREATE TABLE alchemy_ingredients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    tier INTEGER NOT NULL,
    quality VARCHAR(50) DEFAULT 'NORMAL',
    transmutation_result JSONB
);

-- Inserir os ingredientes de alquimia específicos
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

-- Verificar se a tabela cities existe
DROP TABLE IF EXISTS cities CASCADE;

CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(50) UNIQUE NOT NULL
);

-- Inserir as cidades
INSERT INTO cities (name, code) VALUES
('Bridgewatch', '1'),
('Martlock', '2'),
('Thetford', '3'),
('Fort Sterling', '4'),
('Lymhurst', '5'),
('Caerleon', '6');

-- Verificar a estrutura final
\d market_prices;
\d price_history;
\d arbitrage_opportunities;
\d alchemy_ingredients;
\d cities; 