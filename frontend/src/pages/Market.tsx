import React, { useState, useEffect } from "react"
import {
  Box,
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
} from "@mui/material"
import { marketApi } from "../services/api"

const Market: React.FC = () => {
  const [ingredients, setIngredients] = useState<any[]>([])
  const [cities, setCities] = useState<any[]>([])
  const [marketPrices, setMarketPrices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMarketData()
  }, [])

  const fetchMarketData = async () => {
    try {
      setLoading(true)
      setError(null)

      const [ingredientsResponse, citiesResponse, pricesResponse] =
        await Promise.all([
          marketApi.getIngredients(),
          marketApi.getCities(),
          marketApi.getMarketPrices(),
        ])

      setIngredients(ingredientsResponse.data)
      setCities(citiesResponse.data)
      setMarketPrices(pricesResponse.data)
    } catch (err) {
      setError("Erro ao carregar dados de mercado")
      console.error("Market error:", err)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR")
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
        Dados de Mercado
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Informações sobre ingredientes, cidades e preços de mercado
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {/* Estatísticas */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Paper>
            <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="h6">Ingredientes</Typography>
            </Box>
            <Typography variant="h4" color="primary">
              {ingredients.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total de ingredientes
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper>
            <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="h6">Cidades</Typography>
            </Box>
            <Typography variant="h4" color="secondary">
              {cities.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cidades disponíveis
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper>
            <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="h6">Preços</Typography>
            </Box>
            <Typography variant="h4" color="info.main">
              {marketPrices.length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Preços registrados
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Ingredientes */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Ingredientes de Alquimia
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Item Type ID</TableCell>
                <TableCell>Tier</TableCell>
                <TableCell>Enchantment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredients.map((ingredient) => (
                <TableRow key={ingredient.id} hover>
                  <TableCell>
                    <Typography variant="body2" fontWeight="medium">
                      {ingredient.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {ingredient.item_type_id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {`T${ingredient.tier}`}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {`+${ingredient.enchantment}`}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Cidades */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Cidades Disponíveis
        </Typography>

        <Grid container spacing={2}>
          {cities.map((city) => (
            <Grid item xs={12} sm={6} md={4} key={city.id}>
              <Paper variant="outlined">
                <Box display="flex" alignItems="center" mb={2}>
                  <Typography variant="h6" gutterBottom>
                    {city.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Código: {city.code}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Preços de Mercado */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Preços de Mercado
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item Type ID</TableCell>
                <TableCell>Cidade</TableCell>
                <TableCell>Qualidade</TableCell>
                <TableCell align="right">Preço Mínimo Venda</TableCell>
                <TableCell align="right">Preço Máximo Venda</TableCell>
                <TableCell align="right">Preço Máximo Compra</TableCell>
                <TableCell>Atualizado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {marketPrices.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    <Typography variant="body2" color="text.secondary">
                      Nenhum preço de mercado disponível
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                marketPrices.map((price) => (
                  <TableRow key={price.id} hover>
                    <TableCell>
                      <Typography variant="body2" fontWeight="medium">
                        {price.item_type_id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {cities.find((c) => c.id === price.city_id)?.name ||
                          "N/A"}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {`Q${price.quality}`}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="text.secondary">
                        {formatPrice(price.sell_price_min)} prata
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="text.secondary">
                        {formatPrice(price.sell_price_max)} prata
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="text.secondary">
                        {formatPrice(price.buy_price_max)} prata
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(price.updated_at).toLocaleString("pt-BR")}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

export default Market
