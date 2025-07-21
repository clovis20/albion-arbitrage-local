import React from "react"
import { Routes, Route } from "react-router-dom"
import { Box, Container } from "@mui/material"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import Arbitrage from "./pages/Arbitrage"
import Market from "./pages/Market"
import Settings from "./pages/Settings"
import ManualArbitrage from "./pages/ManualArbitrage"

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Container
        component="main"
        sx={{ flexGrow: 1, py: 3, maxWidth: "1400px !important" }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/arbitrage" element={<Arbitrage />} />
          <Route path="/manual-arbitrage" element={<ManualArbitrage />} />
          <Route path="/market" element={<Market />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App
