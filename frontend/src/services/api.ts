import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

// Interceptor para logs de requisições
api.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    console.error("API Request Error:", error)
    return Promise.reject(error)
  }
)

// Interceptor para logs de respostas
api.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config.url}`)
    return response
  },
  (error) => {
    console.error("API Response Error:", error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export interface Ingredient {
  id: number
  name: string
  item_type_id: string
  tier: number
  enchantment: number
}

export interface City {
  id: number
  name: string
  code: string
}

export interface MarketPrice {
  id: number
  item_type_id: string
  city_id: number
  quality: number
  sell_price_min: number
  sell_price_max: number
  buy_price_max: number
  updated_at: string
}

export interface ArbitrageOpportunity {
  id: number
  item_name: string
  item_tier?: number
  buy_city: string
  sell_city: string
  buy_price: number
  sell_price: number
  quantity_multiplier?: number
  profit: number
  profit_percentage: number
  updated_at: string
}

export interface PriceHistory {
  id: number
  item_type_id: string
  city_id: number
  quality: number
  price: number
  timestamp: string
}

export const marketApi = {
  // Ingredientes
  getIngredients: () => api.get<Ingredient[]>("/market/ingredients"),

  // Cidades
  getCities: () => api.get<City[]>("/market/cities"),

  // Preços de mercado
  getMarketPrices: (params?: {
    item_type_id?: string
    city_id?: number
    quality?: number
  }) => api.get<MarketPrice[]>("/market/prices", { params }),

  // Histórico de preços
  getPriceHistory: (params: {
    item_type_id: string
    city_id: number
    quality?: number
    days?: number
  }) => api.get<PriceHistory[]>("/market/price-history", { params }),
}

export const arbitrageApi = {
  // Oportunidades de arbitragem
  getTopOpportunities: (limit?: number) =>
    api.get<{ opportunities: ArbitrageOpportunity[] }>("/arbitrage/top", {
      params: { limit },
    }),

  // Oportunidades filtradas
  getFilteredOpportunities: (params?: {
    min_profit?: number
    min_profit_percentage?: number
    item_name?: string
    buy_city?: string
    sell_city?: string
  }) =>
    api.get<{ opportunities: ArbitrageOpportunity[] }>("/arbitrage/filtered", {
      params,
    }),

  // Informações de filtros
  getFiltersInfo: () => api.get("/arbitrage/filters-info"),
}

export default api
