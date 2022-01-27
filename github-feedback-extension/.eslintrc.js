module.exports = {
    extends: "eslint:recommended",
    env: {
        browser: true,
        es6: true,
        webextensions: true
    },
    globals: {
        API_URL: true,
        IS_PRODUCTION: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            "jsx": true
        },
    },
    rules: {
        "semi": ["warn", "always"],
        "no-unused-vars": 0
    },
    parser: "@babel/eslint-parser",
}