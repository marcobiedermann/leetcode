import { describe, expect, it } from 'vitest';
import countElements from '.';

describe('countElements', () => {
  it('should count elements such that x + 1 is also in array', () => {
    expect.assertions(4);

    expect(countElements([1, 2, 3])).toStrictEqual(2);
    expect(countElements([1, 1, 3, 3, 5, 5, 7, 7])).toStrictEqual(0);
    expect(countElements([1, 3, 2, 3, 5, 0])).toStrictEqual(3);
    expect(countElements([1, 1, 2, 2])).toStrictEqual(2);
  });
});
