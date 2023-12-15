import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/card-perfil/',
  plugins: [react()],
  define: {
    'process.env.BASE_URL': '"/card-perfil/"'
  }
});
