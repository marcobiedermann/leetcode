import { describe, expect, it } from 'vitest';
import isPowerOfTwo from '.';

describe('isPowerOfTwo', () => {
  it('should check if number is a power of two', () => {
    expect.assertions(3);

    expect(isPowerOfTwo(1)).toStrictEqual(true);
    expect(isPowerOfTwo(16)).toStrictEqual(true);
    expect(isPowerOfTwo(218)).toStrictEqual(false);
  });
});
