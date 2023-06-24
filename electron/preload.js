const { contextBridge, ipcMain, ipcRenderer } = require('electron')
const API = require('./constants/apiConstant.js');



//readFileList();
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
})

contextBridge.exposeInMainWorld('config', {
  "className": "MyClass",
  "namespace": "MyNamespace",
  "initialValue": "example",

})

contextBridge.exposeInMainWorld('API', API)


contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, data) => {
    ipcRenderer.send(channel, data)
  },
  receive: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args))
  }
})


