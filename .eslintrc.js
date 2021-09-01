module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "globals": {

    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        // "react-hooks",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 12,
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        // "react-hooks",
    ],
    "rules": {
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'always-multiline'],
        'handle-callback-err': ['error', 'never'],
        'max-len': ['error', {
        code: 120,
        ignoreComments: true,
        }],
        'no-control-regex': 0,
        'no-new': 0,
        'object-curly-spacing': ['error', 'always'],
        "react/jsx-curly-newline": 0,
        "react/jsx-handler-names": 0,
        "react/jsx-no-bind": 0,
        "react/jsx-no-target-blank": 0,
        'react/jsx-indent': 0,
        'react/prop-types': 0,
        'react/display-name': 0,
        // 'react-hooks/rules-of-hooks': 'error',
        // 'react-hooks/exhaustive-deps': 'warn',
        'space-before-function-paren': [
        'error',
        {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always', // 这里如果是 never 会和 prettier 冲突
        },
        ],
        'standard/no-callback-literal': 0,
        camelcase: 0,
        eqeqeq: 0,
        "operator-assignment": [0, "always"],
        'prettier/prettier': 0,
    },
    "settings": {
        "react": {
            "version": "detect",
        },
    },
};
