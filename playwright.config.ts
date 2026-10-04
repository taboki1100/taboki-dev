import { defineConfig, devices } from "@playwright/test";

const baseURL = "http://127.0.0.1:3000";

export default defineConfig({
  testDir: "./tests/e2e",
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["list"], ["github"]] : "list",
  use: { baseURL, locale: "ja-JP" },
  // Serves the static export from `npm run build`.
  webServer: { command: "npx serve out -l 3000", url: baseURL, reuseExistingServer: !process.env.CI },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
