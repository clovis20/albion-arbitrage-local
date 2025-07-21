// Teste simples da API do Albion Online Data
const axios = require("axios")

async function testAlbionAPI() {
  try {
    console.log("🔍 Testando API do Albion Online Data...")

    // Teste 1: Preços de um item específico
    const response1 = await axios.get(
      "https://www.albion-online-data.com/api/v2/stats/prices/T4_BAG",
      {
        params: {
          locations: "Bridgewatch,Martlock",
        },
      }
    )
    console.log("✅ Preços T4_BAG:", response1.data.length, "registros")

    // Teste 2: Histórico de preços
    const response2 = await axios.get(
      "https://www.albion-online-data.com/api/v2/stats/history/T4_BAG",
      {
        params: {
          location: "Bridgewatch",
          quality: 1,
        },
      }
    )
    console.log("✅ Histórico T4_BAG:", response2.data.length, "registros")

    // Teste 3: Preço do ouro
    const response3 = await axios.get(
      "https://www.albion-online-data.com/api/v2/stats/gold"
    )
    console.log("✅ Preço do ouro:", response3.data[0]?.price || "N/A")

    console.log("🎉 API funcionando perfeitamente!")
  } catch (error) {
    console.error("❌ Erro ao testar API:", error.message)
  }
}

testAlbionAPI()
