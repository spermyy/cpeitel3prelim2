import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/cpeitel3prelim2/', // Ensure this matches your repo name
});