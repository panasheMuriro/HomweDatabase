// vitest.config.js
import { defineConfig } from 'vitest/config.js';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test-setup.js'],
    testTimeout: 20000, // Increase timeout for IndexedDB operations
    hookTimeout: 20000,
  },
});