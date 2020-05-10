module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier/@typescript-eslint',
    ],
    ignorePatterns: ['node_modules', '.cache', 'public'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    overrides: [
        // Turns off TypeScript-specific ESLint rules when linting Javascript
        // files.
        {
            files: ['*.js', '*.jsx', '*.mjs'],
            parserOptions: {
                parser: 'babel-eslint',
            },
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'react-hooks'],
    settings: {
        react: {
            version: 'detect',
        },
    },
}
