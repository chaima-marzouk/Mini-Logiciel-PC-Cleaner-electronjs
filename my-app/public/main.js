const { app, BrowserWindow } = require('electron');
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    // win.loadFile(path.join(__dirname, '../src/index.html'))
    win.loadURL('http://localhost:3000')
    
      win.setTitle("Pc cleaner")
      win.setIcon(path.join(__dirname, '../src/img/Groupe 25.png')) 
      win.setMenu(null)
      win.webContents.openDevTools()
    }


    app.whenReady().then(() => {
      createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })