const path = require("path")
require(path.join(__dirname, "dist", "app.js"))
const { app, BrowserWindow } = require("electron")

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  win.maximize()

  // Caminho absoluto para o build do frontend
  win.loadFile(path.join(__dirname, "frontend", "dist", "index.html"))

  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit()
})
