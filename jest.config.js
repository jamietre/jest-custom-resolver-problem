/* eslint flowtype/require-valid-file-annotation: 0 */

const ignorePaths = ['/third_party/'];

module.exports = {
  'transform': {
    '^.+\\.jsx?$': 'babel-jest',
  },
  'testRegex': '.*\\.test\\.jsx?$',
  'testPathIgnorePatterns': ignorePaths,
  'coveragePathIgnorePatterns': ignorePaths,
  'modulePathIgnorePatterns': ignorePaths,
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ],
  'globals': {
  },
  'resolver': 'jest-custom-resolver',
};

