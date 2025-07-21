-- Script para inserir dados de exemplo
-- Execute no PostgreSQL para testar o sistema

-- Inserir dados de exemplo na tabela market_prices
INSERT INTO market_prices (item_type_id, city_id, quality, sell_price_min, sell_price_max, buy_price_max) VALUES
('T4_BAG', 1, 1, 1000, 1200, 800),
('T4_BAG', 2, 1, 1500, 1800, 1200),
('T5_BAG', 1, 1, 2000, 2500, 1800),
('T5_BAG', 2, 1, 3000, 3500, 2500),
('T6_BAG', 1, 1, 4000, 4500, 3500),
('T6_BAG', 2, 1, 5000, 5500, 4500),
('T7_BAG', 1, 1, 8000, 8500, 7000),
('T7_BAG', 2, 1, 10000, 11000, 9000),
('T8_BAG', 1, 1, 15000, 16000, 14000),
('T8_BAG', 2, 1, 20000, 22000, 18000);

-- Inserir dados de exemplo na tabela price_history
INSERT INTO price_history (item_type_id, city_id, quality, price) VALUES
('T4_BAG', 1, 1, 1100),
('T4_BAG', 2, 1, 1650),
('T5_BAG', 1, 1, 2250),
('T5_BAG', 2, 1, 3250),
('T6_BAG', 1, 1, 4250),
('T6_BAG', 2, 1, 5250),
('T7_BAG', 1, 1, 8250),
('T7_BAG', 2, 1, 10500),
('T8_BAG', 1, 1, 15500),
('T8_BAG', 2, 1, 21000); 