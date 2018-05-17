# jest-custom-resolver-problem

Using a jest custom resolver: https://facebook.github.io/jest/docs/en/configuration.html#resolver-string causes automocking using `jest.mock('module')` to not work.

```
yarn test
yarn run v1.6.0
warning ../package.json: No license field
$ jest --config jest.config.js --runInBand
 FAIL  src/jest-mock.test.js
  test jest mocking
    ✕ can mock node packages (7ms)

  ● test jest mocking › can mock node packages

    expect(jest.fn())[.not].toHaveBeenCalledTimes()

    jest.fn() value must be a mock function or spy.
    Received:
      function: [Function anonymous]

       5 |   it('can mock node packages', () => {
       6 |     lodash.add(1,2);
    >  7 |     expect(lodash.add).toHaveBeenCalledTimes(1);
       8 |   });
       9 | });
      10 |

      at Object.<anonymous> (src/jest-mock.test.js:7:24)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.816s, estimated 2s
Ran all test suites.
error Command failed with exit code 1.
```

Implementations of the most basic resolver that just passes through its argument to either `resolve.sync` or `Resolver.findNodeModule` have the same outcome.
