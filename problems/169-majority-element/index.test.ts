import { describe, expect, it } from 'vitest';
import majorityElement from '.';

describe('majorityElement', () => {
  it('should return majority element in array', () => {
    expect.assertions(2);

    expect(majorityElement([3, 2, 3])).toStrictEqual(3);
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toStrictEqual(2);
  });
});
