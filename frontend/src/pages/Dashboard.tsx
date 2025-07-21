import React, { useState, useEffect } from "react"
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Paper,
} from "@mui/material"
import { TrendingUp, Store, AttachMoney, Speed } from "@mui/icons-material"
import { arbitrageApi, marketApi } from "../services/api"

interface DashboardStats {
  totalOpportunities: number
  totalProfit: number
  avgProfitPercentage: number
  lastUpdate: string
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Buscar oportunidades de arbitragem
        const opportunitiesResponse = await arbitrageApi.getTopOpportunities(
          100
        )
        const opportunities = opportunitiesResponse.data.opportunities

        // Calcular estatísticas
        const totalProfit = opportunities.reduce(
          (sum, opp) => sum + opp.profit,
          0
        )
        const avgProfitPercentage =
          opportunities.length > 0
            ? opportunities.reduce(
                (sum, opp) => sum + opp.profit_percentage,
                0
              ) / opportunities.length
            : 0

        setStats({
          totalOpportunities: opportunities.length,
          totalProfit,
          avgProfitPercentage,
          lastUpdate: new Date().toLocaleString("pt-BR"),
        })
      } catch (err) {
        setError("Erro ao carregar dados do dashboard")
        console.error("Dashboard error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

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

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        {error}
      </Alert>
    )
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Visão geral das oportunidades de arbitragem e dados de mercado
      </Typography>

      <Grid container spacing={3}>
        {/* Card - Total de Oportunidades */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <TrendingUp color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Oportunidades</Typography>
              </Box>
              <Typography variant="h4" color="primary">
                {stats?.totalOpportunities || 0}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Oportunidades ativas
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card - Lucro Total */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <AttachMoney color="success" sx={{ mr: 1 }} />
                <Typography variant="h6">Lucro Total</Typography>
              </Box>
              <Typography variant="h4" color="success.main">
                {stats?.totalProfit
                  ? `${stats.totalProfit.toLocaleString("pt-BR")} prata`
                  : "0 prata"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Soma de todos os lucros
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card - Lucro Médio */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Speed color="info" sx={{ mr: 1 }} />
                <Typography variant="h6">Lucro Médio</Typography>
              </Box>
              <Typography variant="h4" color="info.main">
                {stats?.avgProfitPercentage
                  ? `${stats.avgProfitPercentage.toFixed(1)}%`
                  : "0%"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Percentual médio de lucro
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card - Última Atualização */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Store color="warning" sx={{ mr: 1 }} />
                <Typography variant="h6">Atualização</Typography>
              </Box>
              <Typography variant="h6" color="warning.main">
                {stats?.lastUpdate
                  ? new Date(stats.lastUpdate).toLocaleTimeString("pt-BR")
                  : "N/A"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Última atualização
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Área de Status */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Status do Sistema
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: "success.main",
                      mr: 1,
                    }}
                  />
                  <Typography variant="body2">Backend Conectado</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: "success.main",
                      mr: 1,
                    }}
                  />
                  <Typography variant="body2">PostgreSQL Ativo</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box display="flex" alignItems="center">
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: "success.main",
                      mr: 1,
                    }}
                  />
                  <Typography variant="body2">Redis Conectado</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
