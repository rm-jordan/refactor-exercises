import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["node_modules/**", "dist/**", "scripts/**"] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: [
      "exercises-js/**/*.js",
      "reference-js/**/*.js",
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: [
      "exercises/**/*.ts",
      "reference/**/*.ts",
      "exercises-react/**/*.tsx",
      "reference-react/**/*.tsx",
      "vitest.config.ts",
      "vitest.setup.ts",
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
);
