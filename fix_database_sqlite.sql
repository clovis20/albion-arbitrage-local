-- Script de criação de tabelas para SQLite

DROP TABLE IF EXISTS market_prices;
CREATE TABLE market_prices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    item_type_id VARCHAR(100) NOT NULL,
    city_id INTEGER NOT NULL,
    quality INTEGER DEFAULT 1,
    sell_price_min INTEGER,
    sell_price_max INTEGER,
    buy_price_max INTEGER,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(item_type_id, city_id, quality)
);
CREATE INDEX idx_market_prices_item_type_id ON market_prices(item_type_id);
CREATE INDEX idx_market_prices_city_id ON market_prices(city_id);
CREATE INDEX idx_market_prices_updated_at ON market_prices(updated_at);

DROP TABLE IF EXISTS price_history;
CREATE TABLE price_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    item_type_id VARCHAR(100) NOT NULL,
    city_id INTEGER NOT NULL,
    quality INTEGER DEFAULT 1,
    price INTEGER NOT NULL,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_price_history_item_type_id ON price_history(item_type_id);
CREATE INDEX idx_price_history_city_id ON price_history(city_id);
CREATE INDEX idx_price_history_recorded_at ON price_history(recorded_at);

DROP TABLE IF EXISTS arbitrage_opportunities;
CREATE TABLE arbitrage_opportunities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    source_ingredient_id INTEGER NOT NULL,
    target_ingredient_id INTEGER NOT NULL,
    buy_city_id INTEGER NOT NULL,
    sell_city_id INTEGER NOT NULL,
    buy_price INTEGER NOT NULL,
    sell_price INTEGER NOT NULL,
    quantity_multiplier INTEGER NOT NULL,
    gross_profit INTEGER NOT NULL,
    net_profit INTEGER NOT NULL,
    profit_margin REAL NOT NULL,
    calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_arbitrage_source_ingredient ON arbitrage_opportunities(source_ingredient_id);
CREATE INDEX idx_arbitrage_target_ingredient ON arbitrage_opportunities(target_ingredient_id);
CREATE INDEX idx_arbitrage_cities ON arbitrage_opportunities(buy_city_id, sell_city_id);
CREATE INDEX idx_arbitrage_profit_margin ON arbitrage_opportunities(profit_margin);

DROP TABLE IF EXISTS alchemy_ingredients;
CREATE TABLE alchemy_ingredients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) UNIQUE NOT NULL,
    tier INTEGER NOT NULL,
    quality VARCHAR(50) DEFAULT 'NORMAL',
    transmutation_result TEXT
);

-- Inserir os ingredientes de alquimia específicos
INSERT INTO alchemy_ingredients (name, tier, quality, transmutation_result) VALUES
('T3_ALCHEMY_RARE_PANTHER', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_PANTHER", "quantity": 1}]'),
('T5_ALCHEMY_RARE_PANTHER', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_PANTHER", "quantity": 1}]'),
('T7_ALCHEMY_RARE_PANTHER', 7, 'RARE', NULL),
('T3_ALCHEMY_RARE_ENT', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_ENT", "quantity": 1}]'),
('T5_ALCHEMY_RARE_ENT', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_ENT", "quantity": 1}]'),
('T7_ALCHEMY_RARE_ENT', 7, 'RARE', NULL),
('T3_ALCHEMY_RARE_DIREBEAR', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_DIREBEAR", "quantity": 1}]'),
('T5_ALCHEMY_RARE_DIREBEAR', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_DIREBEAR", "quantity": 1}]'),
('T7_ALCHEMY_RARE_DIREBEAR', 7, 'RARE', NULL),
('T3_ALCHEMY_RARE_WEREWOLF', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_WEREWOLF", "quantity": 1}]'),
('T5_ALCHEMY_RARE_WEREWOLF', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_WEREWOLF", "quantity": 1}]'),
('T7_ALCHEMY_RARE_WEREWOLF', 7, 'RARE', NULL),
('T3_ALCHEMY_RARE_IMP', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_IMP", "quantity": 1}]'),
('T5_ALCHEMY_RARE_IMP', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_IMP", "quantity": 1}]'),
('T7_ALCHEMY_RARE_IMP', 7, 'RARE', NULL),
('T3_ALCHEMY_RARE_ELEMENTAL', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_ELEMENTAL", "quantity": 1}]'),
('T5_ALCHEMY_RARE_ELEMENTAL', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_ELEMENTAL", "quantity": 1}]'),
('T7_ALCHEMY_RARE_ELEMENTAL', 7, 'RARE', NULL),
('T3_ALCHEMY_RARE_EAGLE', 3, 'RARE', '[{"name": "T5_ALCHEMY_RARE_EAGLE", "quantity": 1}]'),
('T5_ALCHEMY_RARE_EAGLE', 5, 'RARE', '[{"name": "T7_ALCHEMY_RARE_EAGLE", "quantity": 1}]'),
('T7_ALCHEMY_RARE_EAGLE', 7, 'RARE', NULL);

DROP TABLE IF EXISTS cities;
CREATE TABLE cities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
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