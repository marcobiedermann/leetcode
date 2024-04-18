import { describe, expect, it } from 'vitest';
import canJump from '.';

describe('canJump', () => {
  it('should check if you are able to reach the last index', () => {
    expect.assertions(2);

    expect(canJump([2, 3, 1, 1, 4])).toStrictEqual(true);
    expect(canJump([3, 2, 1, 0, 4])).toStrictEqual(false);
  });
});
