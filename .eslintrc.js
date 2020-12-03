module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/@typescript-eslint',
  ],
  ignorePatterns: ['node_modules', '.cache', 'public'],
  overrides: [
    {
      files: ['*.js'],
      parserOptions: {
        parser: 'babel-eslint',
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  settings: {
    'import/resolver': {
      alias: [
        ['$components', 'src/components'],
        ['$sections', 'src/sections'],
        ['$theme', 'src/theme'],
        ['$typings', 'src/typings'],
      ],
    },
    react: {
      version: 'detect',
    },
  },
}
