module.exports = {
    root: true,
    "env": {
        "browser": true,
        "es6": true,
        node: true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "@vue/prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "parser": "babel-eslint"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "prettier/prettier": "warn"
    }
};