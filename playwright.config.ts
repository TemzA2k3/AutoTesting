import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'api',
      testMatch: ['tests/api/**/*.test.ts'],
    },
    {
      name: 'ui',
      testMatch: ['tests/e2e/**/*.test.ts'],
    },
  ],
  use: {
    baseURL: '',
    trace: 'on',
  },
});
