import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'tests/'],
      extension: ['.js', '.jsx', '.ts', '.tsx'],
      cypress: true
    })
  ],
})
