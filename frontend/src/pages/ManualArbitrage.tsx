import React, { useEffect, useState } from "react"
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
  IconButton,
} from "@mui/material"
import { marketApi } from "../services/api"
import axios from "axios"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import coinImg from "../images/coin.png"
import { useMemo } from "react"
import SwapHorizIcon from "@mui/icons-material/SwapHoriz"
import ClearIcon from "@mui/icons-material/Clear"

interface Scenario {
  conversion: string
  buy_city: string
  sell_city: string
  buy_price: number
  buy_qty: number
  sell_price: number
  sell_qty: number
  net_profit: number
  profit_margin: number
}

const ITEM_BASE_MAP: Record<string, string> = {
  PANTHER: "Shadow Claws",
  ENT: "Sylvian Root",
  DIREBEAR: "Spirit Paws",
  WEREWOLF: "Werewolf Fangs",
  IMP: "Imp's Horn",
  ELEMENTAL: "Runestone Tooth",
  EAGLE: "Dawnfeather",
}

const ManualArbitrage: React.FC = () => {
  const [cities, setCities] = useState<string[]>([])
  const [items, setItems] = useState<string[]>([])
  const [buyCity, setBuyCity] = useState("")
  const [sellCity, setSellCity] = useState("")
  const [itemBase, setItemBase] = useState("") // vazio = todos os itens
  const [scenarios, setScenarios] = useState<Scenario[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({})
  const [grouped, setGrouped] = useState<any[]>([])

  useEffect(() => {
    // Carregar cidades e itens base
    const fetchData = async () => {
      try {
        const [citiesRes, itemsRes] = await Promise.all([
          marketApi.getCities(),
          marketApi.getIngredients(),
        ])
        setCities(
          citiesRes.data
            .map((c: any) => c.name)
            .filter((name: string) => name.toLowerCase() !== "caerleon")
        )
        // Extrair base dos nomes dos ingredientes (ex: PANTHER, ENT...)
        const uniqueBases = Array.from(
          new Set(
            itemsRes.data.map((i: any) => {
              const parts = i.name.split("_")
              return parts[3]
            })
          )
        ).filter((b) => b.length > 0 && ITEM_BASE_MAP[b])
        setItems(uniqueBases)
      } catch (err) {
        setError("Erro ao carregar cidades ou itens base")
      }
    }
    fetchData()
  }, [])

  const handleSimulate = async () => {
    setLoading(true)
    setError("")
    setScenarios([])
    setGrouped([])
    try {
      const res = await axios.get("/api/arbitrage/manual-simulate", {
        params: {
          buy_city: buyCity,
          sell_city: sellCity,
          item_base: itemBase,
        },
      })
      if (res.data.grouped) {
        setGrouped(res.data.grouped)
        setScenarios([])
      } else {
        setScenarios(res.data.scenarios || [])
        setGrouped([])
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Erro ao simular arbitragem manual")
    } finally {
      setLoading(false)
    }
  }

  // Busca automática sempre que cidades ou item base mudarem
  useEffect(() => {
    if (buyCity && sellCity) {
      handleSimulate()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buyCity, sellCity, itemBase])

  // Função para recalcular os valores de cada linha
  const getCalculatedScenario = (s: Scenario, idx: number) => {
    const buyQty = quantities[idx] ?? s.buy_qty
    const sellMultiplier = s.sell_qty / s.buy_qty
    const totalBuy = (s.buy_price ?? 0) * buyQty
    const totalSell = (s.unit_sell_price ?? 0) * buyQty * sellMultiplier
    const SALES_TAX = 0.04
    const netRevenue = totalSell * (1 - SALES_TAX)
    const netProfit = netRevenue - totalBuy
    const profitMargin = totalBuy > 0 ? (netProfit / totalBuy) * 100 : 0
    return {
      ...s,
      buy_qty: buyQty,
      total_buy: totalBuy,
      total_sell_price: (s.unit_sell_price ?? 0) * buyQty * sellMultiplier,
      sell_qty: buyQty * sellMultiplier,
      net_profit: netProfit,
      profit_margin: profitMargin,
    }
  }

  const silverIcon = (
    <img
      src={coinImg}
      alt="prata"
      width={18}
      height={18}
      style={{ verticalAlign: "middle", marginLeft: 4 }}
    />
  )

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Arbitrage Manual
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Simule manualmente conversões de tiers entre cidades e veja todos os
        cenários possíveis, inclusive negativos.
      </Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              select
              label="Cidade de Compra"
              value={buyCity}
              onChange={(e) => setBuyCity(e.target.value)}
              fullWidth
              size="small"
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            item
            xs={12}
            sm={1}
            md={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <IconButton
              aria-label="Inverter cidades"
              onClick={() => {
                const temp = buyCity
                setBuyCity(sellCity)
                setSellCity(temp)
                setTimeout(() => handleSimulate(), 0)
              }}
              sx={{ mt: { xs: 2, sm: 0 } }}
            >
              <SwapHorizIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              select
              label="Cidade de Venda"
              value={sellCity}
              onChange={(e) => setSellCity(e.target.value)}
              fullWidth
              size="small"
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4} md={3} display="flex" alignItems="center">
            <TextField
              select
              label="Item Base"
              value={itemBase}
              onChange={(e) => setItemBase(e.target.value)}
              fullWidth
              size="small"
            >
              <MenuItem value="">Todos os itens</MenuItem>
              {items.map((item) => (
                <MenuItem key={item} value={item}>
                  {ITEM_BASE_MAP[item] || item}
                </MenuItem>
              ))}
            </TextField>
            <IconButton
              aria-label="Resetar filtros"
              onClick={() => {
                setBuyCity("")
                setSellCity("")
                setItemBase("")
                setGrouped([])
                setScenarios([])
                setError("")
                setQuantities({})
              }}
              sx={{ ml: 1 }}
            >
              <ClearIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            {/* Botão Buscar removido, busca é automática */}
          </Grid>
        </Grid>
      </Paper>
      {loading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="200px"
        >
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      {/* Renderização dos cards agrupados */}
      {grouped.length > 0 && (
        <Box display="flex" flexDirection="column" gap={4}>
          {grouped.map((group, gidx) => (
            <Paper
              key={group.base}
              sx={{
                p: 3,
                mb: 2,
                background: "#232323",
                border: "2px solid #444",
              }}
            >
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <img
                  src={`https://render.albiononline.com/v1/item/T5_ALCHEMY_RARE_${group.base}.png`}
                  alt={group.base}
                  width={48}
                  height={48}
                  style={{ borderRadius: 8, border: "2px solid #888" }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {ITEM_BASE_MAP[group.base] || group.base}
                </Typography>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                      >
                        Conversão
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                      >
                        Preço Compra
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                      >
                        Qtd Compra
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                      >
                        Preço Venda x1
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                      >
                        Preço Venda x2/x4
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                      >
                        Qtd Venda
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                      >
                        Lucro Líquido
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                      >
                        % Lucro
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {group.scenarios.map((s: Scenario, idx: number) => {
                      const calc = getCalculatedScenario(s, idx + gidx * 10)
                      const [from, to] = s.conversion
                        .split("→")
                        .map((str) => str.trim())
                      const fromImg = `https://render.albiononline.com/v1/item/${from}.png`
                      const toItem = to.split(" ")[to.split(" ").length - 1]
                      const toImg = `https://render.albiononline.com/v1/item/${toItem}.png`
                      return (
                        <TableRow key={idx}>
                          <TableCell align="center">
                            <Box
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              gap={2}
                            >
                              <img
                                src={fromImg}
                                alt={from}
                                width={80}
                                height={80}
                                style={{
                                  borderRadius: 10,
                                  border: "2px solid #444",
                                }}
                              />
                              <ArrowForwardIcon
                                sx={{ color: "#888", fontSize: 40 }}
                              />
                              <img
                                src={toImg}
                                alt={toItem}
                                width={80}
                                height={80}
                                style={{
                                  borderRadius: 10,
                                  border: "2px solid #444",
                                }}
                              />
                            </Box>
                          </TableCell>
                          <TableCell align="right">
                            {calc.buy_price !== undefined
                              ? Math.round(calc.buy_price).toLocaleString(
                                  "pt-BR"
                                )
                              : 0}{" "}
                            {silverIcon}
                          </TableCell>
                          <TableCell align="right">
                            <input
                              type="number"
                              min={1}
                              value={calc.buy_qty}
                              style={{
                                width: 60,
                                textAlign: "right",
                                background: "transparent",
                                color: "inherit",
                                border: "1px solid #444",
                                borderRadius: 4,
                                padding: 2,
                              }}
                              onChange={(e) => {
                                const val = Math.max(
                                  1,
                                  parseInt(e.target.value) || 1
                                )
                                setQuantities((q) => ({
                                  ...q,
                                  [idx + gidx * 10]: val,
                                }))
                              }}
                            />
                          </TableCell>
                          <TableCell align="right">
                            {calc.unit_sell_price !== undefined
                              ? Math.round(calc.unit_sell_price).toLocaleString(
                                  "pt-BR"
                                )
                              : 0}{" "}
                            {silverIcon}
                          </TableCell>
                          <TableCell align="right">
                            {calc.total_sell_price !== undefined
                              ? Math.round(
                                  calc.total_sell_price
                                ).toLocaleString("pt-BR")
                              : 0}{" "}
                            {silverIcon}
                          </TableCell>
                          <TableCell align="right">{calc.sell_qty}</TableCell>
                          <TableCell
                            align="right"
                            style={{
                              color:
                                calc.buy_price === 0 ||
                                calc.unit_sell_price === 0
                                  ? "#aaa"
                                  : calc.net_profit >= 0
                                  ? "#4caf50"
                                  : "#f44336",
                            }}
                          >
                            {calc.buy_price === 0 || calc.unit_sell_price === 0
                              ? "N/D"
                              : Math.round(calc.net_profit).toLocaleString(
                                  "pt-BR"
                                ) + " "}
                            {calc.buy_price === 0 || calc.unit_sell_price === 0
                              ? null
                              : silverIcon}
                          </TableCell>
                          <TableCell
                            align="right"
                            style={{
                              color:
                                calc.buy_price === 0 ||
                                calc.unit_sell_price === 0
                                  ? "#aaa"
                                  : calc.profit_margin >= 0
                                  ? "#4caf50"
                                  : "#f44336",
                            }}
                          >
                            {calc.buy_price === 0 || calc.unit_sell_price === 0
                              ? "N/D"
                              : calc.profit_margin?.toFixed(2) + "%"}
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          ))}
        </Box>
      )}
      {/* Renderização da tabela única para scenarios */}
      {scenarios.length > 0 && (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}>
                    Conversão
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                  >
                    Preço Compra
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                  >
                    Qtd Compra
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                  >
                    Preço Venda x1
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                  >
                    Preço Venda x2/x4
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                  >
                    Qtd Venda
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                  >
                    Lucro Líquido
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                  >
                    % Lucro
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scenarios.map((s, idx) => {
                  const calc = getCalculatedScenario(s, idx)
                  const [from, to] = s.conversion
                    .split("→")
                    .map((str) => str.trim())
                  const fromImg = `https://render.albiononline.com/v1/item/${from}.png`
                  const toItem = to.split(" ")[to.split(" ").length - 1]
                  const toImg = `https://render.albiononline.com/v1/item/${toItem}.png`
                  return (
                    <TableRow key={idx}>
                      <TableCell align="center">
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          gap={2}
                        >
                          <img
                            src={fromImg}
                            alt={from}
                            width={80}
                            height={80}
                            style={{
                              borderRadius: 10,
                              border: "2px solid #444",
                            }}
                          />
                          <ArrowForwardIcon
                            sx={{ color: "#888", fontSize: 40 }}
                          />
                          <img
                            src={toImg}
                            alt={toItem}
                            width={80}
                            height={80}
                            style={{
                              borderRadius: 10,
                              border: "2px solid #444",
                            }}
                          />
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        {calc.buy_price !== undefined
                          ? Math.round(calc.buy_price).toLocaleString("pt-BR")
                          : 0}{" "}
                        {silverIcon}
                      </TableCell>
                      <TableCell align="right">
                        <input
                          type="number"
                          min={1}
                          value={calc.buy_qty}
                          style={{
                            width: 60,
                            textAlign: "right",
                            background: "transparent",
                            color: "inherit",
                            border: "1px solid #444",
                            borderRadius: 4,
                            padding: 2,
                          }}
                          onChange={(e) => {
                            const val = Math.max(
                              1,
                              parseInt(e.target.value) || 1
                            )
                            setQuantities((q) => ({ ...q, [idx]: val }))
                          }}
                        />
                      </TableCell>
                      <TableCell align="right">
                        {calc.unit_sell_price !== undefined
                          ? Math.round(calc.unit_sell_price).toLocaleString(
                              "pt-BR"
                            )
                          : 0}{" "}
                        {silverIcon}
                      </TableCell>
                      <TableCell align="right">
                        {calc.total_sell_price !== undefined
                          ? Math.round(calc.total_sell_price).toLocaleString(
                              "pt-BR"
                            )
                          : 0}{" "}
                        {silverIcon}
                      </TableCell>
                      <TableCell align="right">{calc.sell_qty}</TableCell>
                      <TableCell
                        align="right"
                        style={{
                          color:
                            calc.buy_price === 0 || calc.unit_sell_price === 0
                              ? "#aaa"
                              : calc.net_profit >= 0
                              ? "#4caf50"
                              : "#f44336",
                        }}
                      >
                        {calc.buy_price === 0 || calc.unit_sell_price === 0
                          ? "N/D"
                          : Math.round(calc.net_profit).toLocaleString(
                              "pt-BR"
                            ) + " "}
                        {calc.buy_price === 0 || calc.unit_sell_price === 0
                          ? null
                          : silverIcon}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{
                          color:
                            calc.buy_price === 0 || calc.unit_sell_price === 0
                              ? "#aaa"
                              : calc.profit_margin >= 0
                              ? "#4caf50"
                              : "#f44336",
                        }}
                      >
                        {calc.buy_price === 0 || calc.unit_sell_price === 0
                          ? "N/D"
                          : calc.profit_margin?.toFixed(2) + "%"}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
      {scenarios.length === 0 && !loading && !error && (
        <Alert severity="info" sx={{ mt: 2 }}>
          Nenhum cenário encontrado para os filtros selecionados.
        </Alert>
      )}
    </Box>
  )
}

export default ManualArbitrage
