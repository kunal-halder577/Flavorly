import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true, // allows network access
    strictPort: false,
    // Allow all hosts (needed for tunnels like Cloudflare)
    allowedHosts: 'all'
  }
})
