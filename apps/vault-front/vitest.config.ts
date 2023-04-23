/// <reference types="vitest" />

import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./setupTest.ts'],
    environment: 'happy-dom',
  },
});
