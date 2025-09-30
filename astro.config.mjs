import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  server: {
    host: true, 
    port: 4321
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: [
        'localhost'
      ]
    }
  }
});