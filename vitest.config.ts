import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    exclude: ["tests/e2e/**", "node_modules/**", ".next/**", "out/**"],
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: { alias: { "@": import.meta.dirname } },
});
