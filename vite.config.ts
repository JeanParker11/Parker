import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/professeur-parker/', // Chemin pour GitHub Pages
  plugins: [react()],
});
