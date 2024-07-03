module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    sourseType: "module",
  },
  plugins: ["jest"],
  rules: {
    "linebreak-style": "off",
    "max-len": ["error", { ignoreComments: true }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-param-reassign": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "no-shadow": "off",
  },
};
