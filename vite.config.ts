import { defineConfig } from 'vite'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker'
// https://vite.dev/config/
export default defineConfig({
  base: '/web3d/',
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          three: [['*', 'THREE']],
        },
      ],
      dts: true,
    }),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{vue,ts,js,tsx,jsx}"',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
