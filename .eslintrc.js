module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'jsx-a11y',
        'react',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
}
