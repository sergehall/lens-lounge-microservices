// jest.config.ts

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  moduleNameMapper: {
    // Mock styles
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',

    // Mock static assets using the .ts version
    '\\.(jpg|jpeg|png|gif|svg|eot|otf|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.js',

    // Path aliases (optional, from tsconfig)
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;
