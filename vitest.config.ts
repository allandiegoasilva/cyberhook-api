import { resolve } from 'path'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude],
  },
  resolve: {
    alias: [
      {
        replacement: resolve(__dirname, "./src/"),
        find: /[@/*]/g
      }
    ]
  }
})