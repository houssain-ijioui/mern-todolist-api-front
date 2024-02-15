module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {},
  testMatch: ['<rootDir>/apps/mern-todolist-api-e2e/src/**/*.spec.js'],
};
