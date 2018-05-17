# jest-source-map-problem

Running `yarn test` will cause the test to fail, but source maps don't work correctly for JavaScript files that are
imported by TypeScript files

```
> yarn test
yarn run v1.3.2
warning ../package.json: No license field
$ jest --config jest.config.js --runInBand
 FAIL  src/alert.test.tsx
  Alert
    ✕ large size (6ms)

  ● Alert › large size

    error in shallow

      19 |  * It shows some lines
      20 |  *
    > 21 |  * From the original code
      22 |  *
      23 |  * Since the generated code is longer
      24 |  *

      at shallow (src/utils/helpers.js:21:9)
      at Object.it (src/alert.test.tsx:10:33)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.438s, estimated 2s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
