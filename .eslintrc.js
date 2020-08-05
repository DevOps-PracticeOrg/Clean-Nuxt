module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // より厳しいルールにするには`plugin:vue/strongly-recommended` もしくは `plugin:vue/recommended` に切り替えることを検討してください。
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  // *.vue ファイルを lint にかけるために必要
  plugins: ["vue", "jest"],
  // ここにカスタムルールを追加します。
  rules: {
    semi: [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "prettier/prettier": ["error", { semi: false }],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "vue/name-property-casing": ["PascalCase" | "kebab-case"],
  },
}
