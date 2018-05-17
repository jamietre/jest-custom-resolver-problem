import lodash from 'lodash';
jest.mock('lodash');

describe('test jest mocking', () => {
  it('can mock node packages', () => {
    lodash.add(1,2);
    expect(lodash.add).toHaveBeenCalledTimes(1);
  });
});
