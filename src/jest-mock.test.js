import { go } from './module-1';
import lodash from 'lodash'

jest.mock('lodash');

describe('test jest mocking', () => {
  it('can mock node packages', () => {
    go();
    expect(lodash.add).toHaveBeenCalledTimes(1);
  });
});
