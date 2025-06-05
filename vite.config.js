import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  src: 'my-app',
  plugins: [solid()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
});
