import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "https://bookaride.cv",
      "bookaride.cv",
      "https://bookaride-landing.pxxlspace.cv",
      "bookaride-landing.pxxlspace.cv",
    ],
  },
});
