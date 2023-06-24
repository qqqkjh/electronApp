// electron/electron.js
const path = require('path');
const { app, BrowserWindow, ipcMain, dialog, ipcRenderer } = require('electron');

const isDev = process.env.IS_DEV == "true" ? true : false;

let mainWindow
function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  mainWindow.loadURL(
    isDev
      //? 'http://localhost:3000'
      ?`file://${path.join(__dirname, '../dist/index.html')}`
      : `file://${path.join(__dirname, '../dist/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }else{
    mainWindow.webContents.openDevTools();
  }


  
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('message-hello-main', () =>{
  mainWindow.webContents.send('message-hello-render', 'message-Hello-call')
})

// ipcMain.on('generate-class-file', () => {
//   dialog.showSaveDialog({
//     title: 'Select Output Path',
//     defaultPath: 'MyClass.cs',
//     filters: [
//       { name: 'C# Class Files', extensions: ['cs'] },
//       { name: 'All Files', extensions: ['*'] }
//     ]
//   }).then(result => {
//     if (!result.canceled && result.filePath) {
//       const outputPath = result.filePath;

//       const classCode = `
// using System;

// namespace MyNamespace
// {
//     public class MyClass
//     {
//         private string myField;

//         public MyClass(string initialValue)
//         {
//             myField = initialValue;
//         }

//         public void MyMethod()
//         {
//             Console.WriteLine("Hello, World! My field value is: " + myField);
//         }
//     }
// }
// `;

//       fs.writeFile(outputPath, classCode, (err) => {
//         if (err) throw err;
//         console.log(`C# class file created at ${outputPath}`);
//       });
//     }
//   }).catch(err => {
//     console.error(`Error selecting output path: ${err}`);
//   });
// });
