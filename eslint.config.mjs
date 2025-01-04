import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    extends: ["next/core-web-vitals", "prettier"],
    plugins: ["@typescript-eslint"],
    rules: {
      "no-unused-vars": [
        "off", // Options: "off", "warn", or "error"
        {
          argsIgnorePattern: "^_", // Ignore arguments starting with "_"
          varsIgnorePattern: "^_", // Ignore variables starting with "_"
        },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
