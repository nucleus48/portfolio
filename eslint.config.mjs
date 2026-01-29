import eslint from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig(
  globalIgnores(["eslint.config.mjs", "postcss.config.mjs"]),
  eslint.configs.recommended,
  ...nextVitals,
  ...nextTs,
);
