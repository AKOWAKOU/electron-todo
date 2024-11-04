const { app, BrowserWindow,Notification,ipcMain } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      //preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadURL('http://localhost:3000');
}

function showNotification(title, body) {
  new Notification({ title, body }).show();
}
app.whenReady().then(() => {
  createWindow();
  
  showNotification('Application prête', 'Votre application Electron est lancée !');

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

ipcMain.on('task-updated', (event, tasks) => {
  showNotification('Mise à jour de tâche', `Le statut de la tâche ${tasks._id} est maintenant "${tasks.status}"`);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});