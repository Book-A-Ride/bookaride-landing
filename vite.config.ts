import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    allowedHosts: [
      "https://bookaride.cv",
      "bookaride.cv",
      "https://bookaride-landing.pxxlspace.cv",
      "bookaride-landing.pxxlspace.cv",
    ],
  },
});
