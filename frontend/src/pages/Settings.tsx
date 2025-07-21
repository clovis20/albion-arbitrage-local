import React, { useState, useEffect } from "react"
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  Alert,
} from "@mui/material"
import {
  CheckCircle,
  Error,
  Warning,
  Info,
  Storage,
  Cloud,
  Settings as SettingsIcon,
} from "@mui/icons-material"

interface SystemStatus {
  backend: "connected" | "disconnected" | "error"
  database: "connected" | "disconnected" | "error"
  redis: "connected" | "disconnected" | "error"
  nats: "connected" | "disconnected" | "error"
}

const Settings: React.FC = () => {
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    backend: "connected",
    database: "connected",
    redis: "connected",
    nats: "disconnected",
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <CheckCircle color="success" />
      case "disconnected":
        return <Warning color="warning" />
      case "error":
        return <Error color="error" />
      default:
        return <Info color="info" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
        return "success"
      case "disconnected":
        return "warning"
      case "error":
        return "error"
      default:
        return "info"
    }
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Configurações
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Status do sistema e configurações da aplicação
      </Typography>

      <Grid container spacing={3}>
        {/* Status do Sistema */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <SettingsIcon sx={{ mr: 1 }} />
              <Typography variant="h6">Status do Sistema</Typography>
            </Box>

            <List>
              <ListItem>
                <ListItemIcon>
                  {getStatusIcon(systemStatus.backend)}
                </ListItemIcon>
                <ListItemText
                  primary="Backend API"
                  secondary="Servidor Node.js + Express"
                />
                <Chip
                  label={systemStatus.backend}
                  color={getStatusColor(systemStatus.backend) as any}
                  size="small"
                />
              </ListItem>

              <Divider />

              <ListItem>
                <ListItemIcon>
                  {getStatusIcon(systemStatus.database)}
                </ListItemIcon>
                <ListItemText
                  primary="PostgreSQL"
                  secondary="Banco de dados principal"
                />
                <Chip
                  label={systemStatus.database}
                  color={getStatusColor(systemStatus.database) as any}
                  size="small"
                />
              </ListItem>

              <Divider />

              <ListItem>
                <ListItemIcon>{getStatusIcon(systemStatus.redis)}</ListItemIcon>
                <ListItemText
                  primary="Redis Cache"
                  secondary="Cache de dados em tempo real"
                />
                <Chip
                  label={systemStatus.redis}
                  color={getStatusColor(systemStatus.redis) as any}
                  size="small"
                />
              </ListItem>

              <Divider />

              <ListItem>
                <ListItemIcon>{getStatusIcon(systemStatus.nats)}</ListItemIcon>
                <ListItemText
                  primary="NATS Messaging"
                  secondary="Dados em tempo real do Albion"
                />
                <Chip
                  label={systemStatus.nats}
                  color={getStatusColor(systemStatus.nats) as any}
                  size="small"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Informações da Aplicação */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Informações da Aplicação
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon>
                  <Info color="info" />
                </ListItemIcon>
                <ListItemText primary="Versão" secondary="1.0.0" />
              </ListItem>

              <Divider />

              <ListItem>
                <ListItemIcon>
                  <Cloud color="info" />
                </ListItemIcon>
                <ListItemText primary="Ambiente" secondary="Desenvolvimento" />
              </ListItem>

              <Divider />

              <ListItem>
                <ListItemIcon>
                  <Storage color="info" />
                </ListItemIcon>
                <ListItemText
                  primary="Backend URL"
                  secondary="http://localhost:5000"
                />
              </ListItem>

              <Divider />

              <ListItem>
                <ListItemIcon>
                  <Storage color="info" />
                </ListItemIcon>
                <ListItemText
                  primary="Frontend URL"
                  secondary="http://localhost:3000"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Configurações de Desenvolvimento */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Configurações de Desenvolvimento
            </Typography>

            <Alert severity="info" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>Backend:</strong> Node.js + TypeScript + Express
                <br />
                <strong>Frontend:</strong> React + TypeScript + Vite +
                Material-UI
                <br />
                <strong>Database:</strong> PostgreSQL + Redis
                <br />
                <strong>Real-time:</strong> Socket.io + NATS
              </Typography>
            </Alert>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" gutterBottom>
                  Variáveis de Ambiente (.env)
                </Typography>
                <Box
                  component="pre"
                  sx={{
                    bgcolor: "grey.900",
                    p: 2,
                    borderRadius: 1,
                    fontSize: "0.875rem",
                    overflow: "auto",
                  }}
                >
                  {`# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=albion_arbitrage
DB_USER=postgres
DB_PASSWORD=sua_senha

# Redis
REDIS_URL=redis://localhost:6380

# NATS
NATS_SERVERS=nats://localhost:4222

# Server
PORT=5000
FRONTEND_URL=http://localhost:3000`}
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" gutterBottom>
                  Scripts Disponíveis
                </Typography>
                <Box
                  component="pre"
                  sx={{
                    bgcolor: "grey.900",
                    p: 2,
                    borderRadius: 1,
                    fontSize: "0.875rem",
                    overflow: "auto",
                  }}
                >
                  {`# Backend
npm run dev          # Desenvolvimento
npm run build        # Build
npm run start        # Produção

# Frontend
npm run frontend:dev    # Desenvolvimento
npm run frontend:build  # Build

# Full Stack
npm run dev:full        # Backend + Frontend`}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Settings
