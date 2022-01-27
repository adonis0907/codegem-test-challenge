module.exports = {
    extends: "eslint:recommended",
    env: {
        node: true,
        es6: true
    },
    globals: {
        API_URL: true
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        "semi": ["warn", "always"],
        "no-unused-vars": 0
    },
};