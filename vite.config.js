import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


export default defineConfig(({ mode }) => {
  if (mode === 'common') {
    return {
      build: {
        outDir: resolve(__dirname, './dist_common'),
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, './common/index.js'),
            fileName: 'common',
            name: '$common',
            formats: [ 'umd' ]
        },

        rollupOptions: {
        
          // input: {
          //   common: 'common/index.js' 
          // },
    
          // output: {
          //   dir: 'dist_common', 
          //   format: 'umd',
          //   entryFileNames: '[name].js', 
          // }
                   
        },
      },

    }
  }

  return {
    base: process.env.ELECTRON=="true" ? './' : ".",
    build: {
      rollupOptions: {
        input: {
          app: 'index.html' // Assuming this is the entry point for your Vue SPA
        },
  
        output: {
          dir: 'dist', // Specify the output directory as 'dist'
          entryFileNames: 'assets/[name].[hash].js', // Add the [hash] placeholder for automatic file versioning
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
        }
       
        
      },
    },
    plugins: [vue()],
  }


});

