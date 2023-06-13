/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        isolatedModules: true,
        tsconfig: '<rootDir>/tsconfig.jest.json',
      },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>/src/testing/setupTests.ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
}
