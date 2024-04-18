import { describe, expect, it } from 'vitest';
import numJewelsInStones from '.';

describe('numJewelsInStones', () => {
  it('should count number of jewels in stones', () => {
    expect.assertions(2);

    expect(numJewelsInStones('aA', 'aAAbbbb')).toStrictEqual(3);
    expect(numJewelsInStones('z', 'ZZ')).toStrictEqual(0);
  });
});
