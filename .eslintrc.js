module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:import/warnings',
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
    {
      files: ['gatsby-config.js', 'package.json', 'src/theme/global/theme.ts'],
      rules: {
        'sort-keys': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'simple-import-sort'],
  rules: {
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        /**
         * @see https://github.com/lydell/eslint-plugin-simple-import-sort/issues/25#issuecomment-557628379
         */
        groups: [['^\\u0000', '^@?\\w', '^[^.]', '^\\.']],
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: false,
      },
    ],
    'sort-vars': [
      'error',
      {
        ignoreCase: false,
      },
    ],
  },
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
