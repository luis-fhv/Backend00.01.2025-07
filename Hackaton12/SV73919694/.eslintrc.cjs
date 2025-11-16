/* eslint-env node */
export default {
  env: { es2022: true, node: true },
  parserOptions: { ecmaVersion: 2022, sourceType: "module" },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
  ],
  rules: {
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "import/order": ["warn", { groups: [["builtin", "external", "internal"]] }],
  },
};
