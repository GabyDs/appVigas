const { app, BrowserWindow } = require('electron')

// ventana principal
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile('./index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  // darwin para macOS
  if (process.platform !== 'darwin') {
    app.quit()
  }
})