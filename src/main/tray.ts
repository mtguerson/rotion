import { app, Menu, nativeImage, Tray } from 'electron'
import path from 'node:path'

app.whenReady().then(() => {
  const icon = nativeImage.createFromPath(
    path.resolve(__dirname, '../../build/icon.ico'),
  )

  console.log(__dirname)

  const tray = new Tray(icon)

  const menu = Menu.buildFromTemplate([{ label: 'Rotion' }])

  tray.setContextMenu(menu)
})
