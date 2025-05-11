import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  server: { // Add this server configuration block
    https: {
      key: fs.readFileSync('/etc/nginx/ssl/fullchain1.pem'),
      cert: fs.readFileSync('/etc/nginx/ssl/privkey1.pem'),
    }
  },
})
