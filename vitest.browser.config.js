import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: 'webdriverio',
      // https://vitest.dev/guide/browser/webdriverio
      instances: [
      ],
    },
  },
})
