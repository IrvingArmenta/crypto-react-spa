module.exports = {
  root: true,
  env: { browser: true, es2020: true },
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
    'react/prop-types': 0
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
