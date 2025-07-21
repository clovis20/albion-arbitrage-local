import React, { useState, useEffect } from "react"
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material"
import { TrendingUp, FilterList } from "@mui/icons-material"
import { arbitrageApi, ArbitrageOpportunity } from "../services/api"
import coinImg from "../images/coin.png"

const Arbitrage: React.FC = () => {
  const [opportunities, setOpportunities] = useState<ArbitrageOpportunity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    minProfit: "",
    minProfitPercentage: "",
    itemName: "",
    buyCity: "",
    sellCity: "",
  })

  useEffect(() => {
    fetchOpportunities()
    const interval = setInterval(fetchOpportunities, 60000) // auto-refresh a cada 60s
    return () => clearInterval(interval)
  }, [])

  const fetchOpportunities = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await arbitrageApi.getTopOpportunities(50)
      // Verificar se a resposta tem a estrutura esperada
      const opportunities = response.data.opportunities || response.data || []
      setOpportunities(opportunities)
    } catch (err) {
      setError("Erro ao carregar oportunidades de arbitragem")
      console.error("Arbitrage error:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }))
  }

  const handleApplyFilters = async () => {
    try {
      setLoading(true)
      setError(null)

      const params: any = {}
      if (filters.minProfit) params.min_profit = parseInt(filters.minProfit)
      if (filters.minProfitPercentage)
        params.min_profit_percentage = parseFloat(filters.minProfitPercentage)
      if (filters.itemName) params.item_name = filters.itemName
      if (filters.buyCity) params.buy_city = filters.buyCity
      if (filters.sellCity) params.sell_city = filters.sellCity

      const response = await arbitrageApi.getFilteredOpportunities(params)
      // Verificar se a resposta tem a estrutura esperada
      const opportunities = response.data.opportunities || response.data || []
      setOpportunities(opportunities)
    } catch (err) {
      setError("Erro ao aplicar filtros")
      console.error("Filter error:", err)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price: number | undefined | null | string) => {
    if (price === undefined || price === null) return "N/A"
    const numPrice = typeof price === "string" ? parseFloat(price) : price
    if (isNaN(numPrice)) return "N/A"
    return numPrice.toLocaleString("pt-BR")
  }

  const formatPercentage = (percentage: number | undefined | null | string) => {
    if (percentage === undefined || percentage === null) return "N/A"
    const numPercentage =
      typeof percentage === "string" ? parseFloat(percentage) : percentage
    if (isNaN(numPercentage)) return "N/A"
    return `${numPercentage.toFixed(2)}%`
  }

  const getProfitColor = (profit: number | undefined | null | string) => {
    if (profit === undefined || profit === null) return "error"
    const numProfit = typeof profit === "string" ? parseFloat(profit) : profit
    if (isNaN(numProfit)) return "error"
    if (numProfit > 1000) return "success"
    if (numProfit > 500) return "warning"
    return "error"
  }

  // Filtrar oportunidades com lucro positivo
  const filteredOpportunities = opportunities.filter((opportunity) => {
    const quantidade = opportunity.quantity_multiplier || 1
    const TAXA = 0.04
    const totalCost = opportunity.buy_price
    const totalRevenue = opportunity.sell_price * quantidade
    const netRevenue = totalRevenue * (1 - TAXA)
    const netProfit = netRevenue - totalCost
    return netProfit > 0
  })

  // Calcular Lucro Total apenas com lucros positivos
  const totalProfit = filteredOpportunities.reduce((acc, opportunity) => {
    const quantidade = opportunity.quantity_multiplier || 1
    const TAXA = 0.04
    const totalCost = opportunity.buy_price
    const totalRevenue = opportunity.sell_price * quantidade
    const netRevenue = totalRevenue * (1 - TAXA)
    const netProfit = netRevenue - totalCost
    return acc + (netProfit > 0 ? netProfit : 0)
  }, 0)

  // Mapeamento para nome amigável
  const ITEM_BASE_MAP: Record<string, string> = {
    PANTHER: "Shadow Claws",
    ENT: "Sylvian Root",
    DIREBEAR: "Spirit Paws",
    WEREWOLF: "Werewolf Fangs",
    IMP: "Imp's Horn",
    ELEMENTAL: "Runestone Tooth",
    EAGLE: "Dawnfeather",
  }

  // Função para extrair base do nome técnico
  function getBaseFromItemName(itemName: string) {
    const parts = itemName.split("_")
    return parts[3] || itemName
  }

  // Função para montar nome amigável
  function getFriendlyName(itemName: string) {
    const base = getBaseFromItemName(itemName)
    return ITEM_BASE_MAP[base] || itemName
  }

  // Função para montar URL da imagem
  function getItemImage(itemName: string) {
    return `https://render.albiononline.com/v1/item/${itemName}.png`
  }

  // Silver icon
  const silverIcon = (
    <img
      src={coinImg}
      alt="prata"
      width={18}
      height={18}
      style={{ verticalAlign: "middle", marginLeft: 4 }}
    />
  )

  // Mapeamento de cor para cada cidade (conforme mapa do Albion)
  const CITY_COLOR_MAP: Record<string, string> = {
    Caerleon: "#e74c3c", // vermelho
    Thetford: "#8e44ad", // roxo
    "Fort Sterling": "#ecf0f1", // branco
    Lymhurst: "#f1c40f", // amarelo
    Bridgewatch: "#f39c12", // laranja/amarelo escuro
    Martlock: "#3498db", // azul
  }

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="400px"
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Oportunidades de Arbitragem
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Encontre as melhores oportunidades de compra e venda entre cidades
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {/* Filtros */}

      {/* Estatísticas */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="primary" fontWeight="bold">
                {filteredOpportunities.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Oportunidades Encontradas
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="success.main" fontWeight="bold">
                {formatPrice(Math.round(totalProfit))} {silverIcon}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lucro Total
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="info.main">
                {opportunities.length > 0
                  ? formatPercentage(
                      opportunities.reduce(
                        (sum, opp) => sum + opp.profit_percentage,
                        0
                      ) / opportunities.length
                    )
                  : "0%"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lucro Médio
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tabela de Oportunidades */}
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Comprar em</TableCell>
                <TableCell>Vender em</TableCell>
                <TableCell align="right">Preço Compra</TableCell>
                <TableCell align="right">Preço Venda</TableCell>
                <TableCell align="right">Quantidade</TableCell>
                <TableCell align="right">Lucro</TableCell>
                <TableCell align="right">% Lucro</TableCell>
                <TableCell>Atualizado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOpportunities.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} align="center">
                    <Typography variant="body2" color="text.secondary">
                      Nenhuma oportunidade encontrada
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                filteredOpportunities.map((opportunity) => {
                  const quantidade = opportunity.quantity_multiplier || 1
                  const TAXA = 0.04
                  const totalCost = opportunity.buy_price
                  const totalRevenue = opportunity.sell_price * quantidade
                  const netRevenue = totalRevenue * (1 - TAXA)
                  const netProfit = netRevenue - totalCost
                  const profitMargin =
                    totalCost > 0 ? (netProfit / totalCost) * 100 : 0
                  // Para exibir conversão visual, usar item_name (de) e calcular o (para) pelo tier
                  const from = opportunity.item_name
                  let to = from
                  if (quantidade === 2) {
                    // T5->T3 ou T7->T5
                    const tier = from.split("_")[0]
                    const base = getBaseFromItemName(from)
                    if (tier === "T5") to = `T3_ALCHEMY_RARE_${base}`
                    else if (tier === "T7") to = `T5_ALCHEMY_RARE_${base}`
                  } else if (quantidade === 4) {
                    // T7->T3
                    const base = getBaseFromItemName(from)
                    to = `T3_ALCHEMY_RARE_${base}`
                  }
                  return (
                    <TableRow key={opportunity.id} hover>
                      <TableCell>
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          gap={1}
                        >
                          <Typography
                            variant="body2"
                            fontWeight="bold"
                            align="center"
                          >
                            {getFriendlyName(from)}
                          </Typography>
                          <Box display="flex" alignItems="center" gap={2}>
                            <img
                              src={getItemImage(from)}
                              alt={from}
                              width={48}
                              height={48}
                              style={{
                                borderRadius: 8,
                                border: "2px solid #888",
                              }}
                            />
                            <span
                              style={{
                                color: "#888",
                                fontWeight: 700,
                                fontSize: 24,
                              }}
                            >
                              →
                            </span>
                            <img
                              src={getItemImage(to)}
                              alt={to}
                              width={48}
                              height={48}
                              style={{
                                borderRadius: 8,
                                border: "2px solid #888",
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={opportunity.buy_city}
                          size="small"
                          variant="outlined"
                          sx={{
                            color:
                              CITY_COLOR_MAP[opportunity.buy_city] || "inherit",
                            borderColor:
                              CITY_COLOR_MAP[opportunity.buy_city] || "inherit",
                            fontWeight: "bold",
                            background: "transparent",
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={opportunity.sell_city}
                          size="small"
                          variant="outlined"
                          sx={{
                            color:
                              CITY_COLOR_MAP[opportunity.sell_city] ||
                              "inherit",
                            borderColor:
                              CITY_COLOR_MAP[opportunity.sell_city] ||
                              "inherit",
                            fontWeight: "bold",
                            background: "transparent",
                          }}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" color="text.secondary">
                          {formatPrice(opportunity.buy_price)} {silverIcon}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" color="text.secondary">
                          {formatPrice(opportunity.sell_price)} {silverIcon}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography variant="body2" color="text.secondary">
                          {quantidade}x
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          variant="body2"
                          color={netProfit >= 0 ? "success.main" : "error.main"}
                          fontWeight="medium"
                        >
                          {formatPrice(Math.round(netProfit))} {silverIcon}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          variant="body2"
                          color={netProfit >= 0 ? "success.main" : "error.main"}
                          fontWeight="medium"
                        >
                          {profitMargin.toFixed(2)}%
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {new Date(opportunity.updated_at).toLocaleString(
                            "pt-BR"
                          )}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )
                })
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

export default Arbitrage
