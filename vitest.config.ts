/* eslint-disable import/no-extraneous-dependencies */

import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/testing/setupTests.ts'],
    mockReset: true,
  },
})
