/* eslint flowtype/require-valid-file-annotation: 0, no-console: 0 */

const Resolver = require('jest-resolve');
const resolve = require('resolve');

module.exports = function(importPath, opts) {
  //return Resolver.findNodeModule(importPath, opts);
  return resolve.sync(importPath, opts);
};

