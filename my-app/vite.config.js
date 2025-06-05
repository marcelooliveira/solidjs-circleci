import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        app: './indexxxxxx.html',
      },
    },
    target: 'esnext',
    outDir: 'dist',
  },
});
