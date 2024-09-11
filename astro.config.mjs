import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'

// Configuración de Astro.
export default defineConfig({
  // Integración de Tailwind
  integrations: [tailwind()],
  
  // Output del proyecto como "server" para Vercel
  output: 'server',
  
  // Adaptador para desplegar en Vercel
  adapter: vercel(),
});
