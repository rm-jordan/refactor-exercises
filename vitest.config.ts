import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: [
      "drills/**/*.test.ts",
      "exercises/**/*.test.ts",
      "exercises/**/*.test.js",
      "exercises-js/**/*.test.js",
      "exercises-react/**/*.test.tsx",
    ],
  },
});
