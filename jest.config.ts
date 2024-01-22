export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
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
  }
};
