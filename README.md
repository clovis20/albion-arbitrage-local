# Albion Arbitrage Calculator

Sistema completo de cálculo de arbitragem para Albion Online, com backend Node.js + TypeScript e frontend React + Material-UI.

## 🚀 Tecnologias

### Backend

- **Node.js** + **TypeScript**
- **Express** - Framework web
- **PostgreSQL** - Banco de dados principal
- **Redis** - Cache em tempo real
- **Socket.io** - Comunicação em tempo real
- **node-cron** - Tarefas periódicas
- **Integração REST com Albion Data Project**

### Frontend

- **React** + **TypeScript**
- **Vite** - Build tool
- **Material-UI** - Componentes UI
- **React Router** - Navegação
- **Axios** - Cliente HTTP
- **Recharts** - Gráficos
- **Socket.io-client** - Dados em tempo real

## 📋 Pré-requisitos

- Node.js 18+
- PostgreSQL 12+
- Redis 6+

## 🛠️ Instalação

### 1. Clone o repositório

```bash
git clone <repository-url>
cd novo-site-precos
```

### 2. Instale as dependências do backend

```bash
npm install
```

### 3. Instale as dependências do frontend

```bash
cd frontend
npm install
cd ..
```

### 4. Configure o banco de dados

#### PostgreSQL

```sql
-- Conecte ao PostgreSQL
psql -U postgres

-- Crie o banco de dados
CREATE DATABASE albion_arbitrage;

-- Conecte ao banco criado
\c albion_arbitrage

-- Execute os scripts SQL (veja arquivos .sql na raiz)
```

#### Redis

```bash
# Inicie o Redis na porta 6380
redis-server --port 6380
```

### 5. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=albion_arbitrage
DB_USER=postgres
DB_PASSWORD=sua_senha

# Redis
REDIS_URL=redis://localhost:6380

# Server
PORT=5000
FRONTEND_URL=http://localhost:3000
```

## 🚀 Executando o projeto

### Desenvolvimento

#### Backend apenas

```bash
npm run dev
```

#### Frontend apenas

```bash
cd frontend
npm run dev
```

#### Backend + Frontend (recomendado)

```bash
npm run dev:full
```

### Produção

#### Build do backend

```bash
npm run build
npm start
```

#### Build do frontend

```bash
cd frontend
npm run build
```

## 📊 Estrutura do Projeto

```
novo-site-precos/
├── src/
│   ├── app.ts                 # Aplicação principal
│   ├── routes/                # Rotas da API
│   │   ├── arbitrageRoutes.ts
│   │   └── marketRoutes.ts
│   ├── services/              # Serviços
│   │   ├── arbitrage_service.ts
│   │   ├── database_service.ts
│   │   ├── redis_service.ts
│   └── utils/
│       └── logger.ts
├── frontend/
│   ├── src/
│   │   ├── components/        # Componentes React
│   │   ├── pages/             # Páginas da aplicação
│   │   ├── services/          # Serviços de API
│   │   ├── App.tsx            # Componente principal
│   │   └── main.tsx           # Entry point
│   ├── package.json
│   └── vite.config.ts
├── package.json
└── tsconfig.json
```

## 🔌 APIs Disponíveis

### Market APIs

- `GET /api/market/ingredients` - Lista ingredientes
- `GET /api/market/cities` - Lista cidades
- `GET /api/market/prices` - Preços de mercado
- `GET /api/market/price-history` - Histórico de preços

### Arbitrage APIs

- `GET /api/arbitrage/top` - Top oportunidades
- `GET /api/arbitrage/filtered` - Oportunidades filtradas
- `GET /api/arbitrage/filters-info` - Informações de filtros
- `POST /api/arbitrage/manual-simulate` - Simulação manual de arbitragem (informe cidade_compra, cidade_venda, item_base e veja todos os cenários possíveis de conversão, incluindo lucros negativos)

## 🎯 Funcionalidades

### Dashboard

- Visão geral das oportunidades
- Estatísticas em tempo real
- Status do sistema

### Arbitragem

- Lista de oportunidades de arbitragem
- Filtros avançados
- Cálculo de lucro (incluindo taxa de venda de 4%)
- Tabela responsiva
- Simulação manual de arbitragem (T5→2xT3, T7→2xT5, T7→4xT3)

### Mercado

- Dados de ingredientes
- Preços por cidade
- Histórico de preços
- Informações de qualidade

### Configurações

- Status do sistema
- Informações da aplicação
- Configurações de desenvolvimento

## 🔧 Detalhes Técnicos

- **Integração com Albion Data Project:** O backend faz polling periódico via REST API para buscar preços de mercado em tempo real.
- **Cálculo de Arbitragem:** Considera mecânicas do jogo (ex: T5→2xT3, T7→2xT5, T7→4xT3), taxa de venda de 4%, e mostra oportunidades inclusive negativas.
- **Cache Redis:** Usado para acelerar respostas e reduzir consultas ao banco.
- **Socket.io:** Atualizações em tempo real para o frontend.

## 📝 Scripts SQL

Execute estes scripts no PostgreSQL para criar as tabelas (veja também os arquivos .sql na raiz):

```sql
-- Tabela de ingredientes
CREATE TABLE alchemy_ingredients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    item_type_id VARCHAR(255) UNIQUE NOT NULL,
    tier INTEGER NOT NULL,
    enchantment INTEGER DEFAULT 0
);

-- Tabela de cidades
CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(10) UNIQUE NOT NULL
);

-- Tabela de preços de mercado
CREATE TABLE market_prices (
    id SERIAL PRIMARY KEY,
    item_type_id VARCHAR(255) NOT NULL,
    city_id INTEGER REFERENCES cities(id),
    quality INTEGER DEFAULT 1,
    sell_price_min INTEGER,
    sell_price_max INTEGER,
    buy_price_max INTEGER,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de oportunidades de arbitragem
CREATE TABLE arbitrage_opportunities (
    id SERIAL PRIMARY KEY,
    source_ingredient_id VARCHAR(255) NOT NULL,
    target_ingredient_id VARCHAR(255) NOT NULL,
    buy_city_id INTEGER NOT NULL,
    sell_city_id INTEGER NOT NULL,
    buy_price INTEGER NOT NULL,
    sell_price INTEGER NOT NULL,
    quantity_multiplier INTEGER NOT NULL,
    net_profit INTEGER NOT NULL,
    profit_margin DECIMAL(5,2) NOT NULL,
    calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de histórico de preços
CREATE TABLE price_history (
    id SERIAL PRIMARY KEY,
    item_type_id VARCHAR(255) NOT NULL,
    city_id INTEGER REFERENCES cities(id),
    quality INTEGER DEFAULT 1,
    price INTEGER NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique a seção de troubleshooting
2. Consulte os logs do console
3. Verifique se todas as dependências estão instaladas
4. Confirme se as configurações do `.env` estão corretas

## 🎮 Albion Online

Este projeto é uma ferramenta para jogadores de Albion Online que desejam:

- Identificar oportunidades de arbitragem
- Monitorar preços de mercado
- Analisar tendências de preços
- Simular manualmente cenários de conversão de itens
- Maximizar lucros no mercado

**Nota:** Este é um projeto educacional e não está afiliado oficialmente ao Albion Online.
