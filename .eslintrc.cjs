/** @type {import("@typescript-eslint/utils/dist/ts-eslint/Linter").Linter.ConfigType} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', './styled-sytem'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'prettier',
    'jest-dom',
    'testing-library',
    'react'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'no-console': 'warn',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'enumMember',
        format: ['UPPER_CASE']
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        suffix: ['Type']
      }
    ]
  },
  overrides: [
    {
      // test files only
      files: ['**/?(*.)+(test).[jt]s?(x)'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
        'prettier'
      ]
    }
  ]
};
