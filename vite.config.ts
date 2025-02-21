import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  base: "/",
  preview: {
    host: true,
    port: 3000,
    strictPort: true,
    allowedHosts: ['candidate-search-application-with-reactjs-0v9s.onrender.com']
  }
});
