module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "google"],
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    "arrow-parens": ["error", "as-needed"],
  },
};
