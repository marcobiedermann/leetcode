import { describe, expect, it } from 'vitest';
import singleNumber from '.';

describe('singleNumber', () => {
  it('should single element in array', () => {
    expect.assertions(2);

    expect(singleNumber([2, 2, 3, 2])).toStrictEqual(3);
    expect(singleNumber([0, 1, 0, 1, 0, 1, 99])).toStrictEqual(99);
  });
});
