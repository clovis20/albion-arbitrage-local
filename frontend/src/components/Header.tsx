import React from "react"
import { Link as RouterLink, useLocation } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme,
} from "@mui/material"
import {
  Dashboard as DashboardIcon,
  TrendingUp as ArbitrageIcon,
  Store as MarketIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material"

const Header: React.FC = () => {
  const theme = useTheme()
  const location = useLocation()

  const navItems = [
    { path: "/", label: "Dashboard", icon: <DashboardIcon /> },
    { path: "/arbitrage", label: "Arbitragem", icon: <ArbitrageIcon /> },
    {
      path: "/manual-arbitrage",
      label: "Arbitrage Manual",
      icon: <ArbitrageIcon />,
    },
    { path: "/market", label: "Mercado", icon: <MarketIcon /> },
    { path: "/settings", label: "Configurações", icon: <SettingsIcon /> },
  ]

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
          }}
        >
          Albion Arbitrage
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              startIcon={item.icon}
              sx={{
                color: "inherit",
                textTransform: "none",
                backgroundColor:
                  location.pathname === item.path
                    ? "rgba(255, 255, 255, 0.1)"
                    : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
