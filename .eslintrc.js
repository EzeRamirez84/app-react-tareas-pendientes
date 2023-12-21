module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        //"react/prop-types": [0, {ignore: 0, customValidators: 0, skipUndeclared: 0}]
        'react/prop-types': 'off',

    },
}
