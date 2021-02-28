import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      // you need to set i18n resource including paths !
      include: path.resolve(__dirname, './src/i18n/locales/**')
    })
  ],
  build: {
    rollupOptions: {
      output: {
        // Avoid creating hashed assets, so we can add them to the serviceworker cache more easily
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
