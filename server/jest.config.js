module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/src/**/*.test.ts'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };