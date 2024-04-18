import { describe, expect, it } from 'vitest';
import runningSum from '.';

describe('runningSum', () => {
  it('should return a running sum an array', () => {
    expect.assertions(3);

    expect(runningSum([1, 2, 3, 4])).toStrictEqual([1, 3, 6, 10]);
    expect(runningSum([1, 1, 1, 1, 1])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(runningSum([3, 1, 2, 10, 1])).toStrictEqual([3, 4, 6, 16, 17]);
  });
});
