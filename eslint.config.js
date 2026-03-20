import js from "@eslint/js";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["dist/**", "node_modules/**"]
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { 
      globals: globals.node 
    },
    ...js.configs.recommended
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: globals.node
    },
    plugins: {
      "@typescript-eslint": tseslint
    },
    rules: {
      ...tseslint.configs.recommended.rules
    }
  }
];
