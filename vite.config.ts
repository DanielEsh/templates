import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

const DEFAULT_PORT = 3000

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const { PORT } = loadEnv(mode, process.cwd(), '')

  console.log('PORT')
  return {
    plugins: [vue()],
    server: {
      port: +PORT || DEFAULT_PORT,
    },
  }
})
