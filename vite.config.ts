import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

const DEFAULT_PORT = 3000

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const { PORT } = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [vue(), svgLoader()],
    server: {
      port: +PORT || DEFAULT_PORT,
    },
  }
})
