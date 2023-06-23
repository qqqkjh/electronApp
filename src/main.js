import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

createApp(App).mount('#app')
