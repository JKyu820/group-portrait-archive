import { defineConfig } from '@playwright/test'

const baseURL = 'http://127.0.0.1:3219'

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  use: { baseURL, browserName: 'chromium', reducedMotion: 'reduce' },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
    { name: 'wide-touch', use: { viewport: { width: 600, height: 800 }, isMobile: true, hasTouch: true } },
  ],
  webServer: {
    command: 'npm run start -- --port 3219',
    url: baseURL,
    reuseExistingServer: false,
  },
})
