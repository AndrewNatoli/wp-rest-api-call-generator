module.exports = (wallaby) => {
  return {
    files: ['src/**/*.js', '!src/**/*.test.js', 'package.json'],
    tests: ['src/**/*.test.js'],
    filesWithNoCoverageCalculated: ['src/**/*.mock.js*'],
    env: {
      kind: 'chrome',
      type: 'node',
      runner: 'node'
    },
    debug: true,
    testFramework: 'jest',
    setup: function(wallaby) {
      var jestConfig = require('./package.json').jest;
      // for example:
      // jestConfig.globals = { "__DEV__": true };
      wallaby.testFramework.configure(jestConfig);
    }
  };
};
