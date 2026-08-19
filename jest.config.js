module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '(/__tests__/.*|(\\.|/)(spec|test))\\.ts$',
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/.v0/'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
};
