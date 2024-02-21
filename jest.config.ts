import type { Config } from 'jest';

const jestConfig: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/wouter'],
  // globalSetup: '<rootDir>/test/globalSetup.ts',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.mjs$': 'babel-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/$1',
    '@style/(.*)$': '<rootDir>/styled-system/$1'
  },
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/src/main.tsx',
    'styled-system',
    'api.develop.ts'
  ],
  prettierPath: require.resolve('prettier-2'),
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '<rootDir>/src/setupTests.ts'
  ]
};

export default jestConfig;
