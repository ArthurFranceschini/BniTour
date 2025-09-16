import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    host: true, 
    port: 4321
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: [
        '7faaeb33e284.ngrok-free.app',
        '.ngrok-free.app',
        '.ngrok.io',
        'localhost'
      ]
    }
  }
});