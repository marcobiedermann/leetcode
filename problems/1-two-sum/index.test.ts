import { describe, expect, it } from 'vitest';
import twoSum from '.';

describe('twoSum', () => {
  it('should return indices of the two numbers such that they add up to a specific target', () => {
    expect.assertions(1);

    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });
});
