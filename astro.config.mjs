import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://shop.envysartorialist.it',
  base: '/envy/',  // Può essere omesso se non è necessario
  outDir: './docs'
});