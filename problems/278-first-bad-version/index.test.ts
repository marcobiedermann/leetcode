import { describe, expect, it } from 'vitest';
import solution from '.';

describe('solution', () => {
  it('should return first bad version', () => {
    expect.assertions(1);

    const findFirstBadVersion = solution((version) => version >= 4);

    expect(findFirstBadVersion(5)).toStrictEqual(4);
  });
});
