import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON=="true" ? './' : ".",
  // pluginOptions: {
  //   electronBuilder: {
  //     preload: 'electron/preload.js',
  //     // Or, for multiple preload files:
  //     //preload: { preload: 'src/preload.js', otherPreload: 'src/preload2.js' }
  //   }
  // },
  plugins: [vue()],
})
