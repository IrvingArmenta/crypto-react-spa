export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  // globalSetup: '<rootDir>/test/globalSetup.ts',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.mjs$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/$1',
    '@style/(.*)$': '<rootDir>/styled-system/$1'
  },
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/src/main.tsx',
    'styled-system',
    'api.develop.ts',
    '<rootDir>/src/views/index.tsx'
  ],
  prettierPath: require.resolve('prettier-2')
};
