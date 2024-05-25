import { resolve } from 'path'
import { configDefaults, defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    exclude: [...configDefaults.exclude],
  },
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: resolve(__dirname, "./src/"),
      }
    ]
  }
})