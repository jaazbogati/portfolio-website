import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: '/',
=======
>>>>>>> 66bb3d1d6e7a463540823472c24c89c7fbc0a3fd
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5174,
  },
});
