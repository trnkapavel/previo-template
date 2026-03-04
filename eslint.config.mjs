import js from "@eslint/js";

export default [
  {
    ignores: ["node_modules/**", ".next/**", "wordpress-theme/**"],
  },
  {
    files: ["scripts/export-to-wp.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        console: "readonly",
        process: "readonly",
      },
    },
  },
  js.configs.recommended,
];
