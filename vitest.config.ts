import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    typecheck: {
      enabled: true,
      tsconfig: './tsconfig.json',
    },
    coverage: {
      enabled: true,
      reporter: ['text', 'json', 'html'],
    },
    include: ['test/**/*.test-d.ts'],
  },
})
