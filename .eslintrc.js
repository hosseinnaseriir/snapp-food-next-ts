module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "airbnb-typescript-prettier"],
  parser: "@typescript-eslint/parser",
  options: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        parser: "flow",
        endOfLine: "off",
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".ts", ".tsx", ".jsx"] },
    ],
    "react/jsx-props-no-spreading": "off",
    "linebreak-style": 0,
    "import/prefer-default-export": "off",
    "comma-dangle": "off",
    "react/function-component-definition": "off",
  },
};
