import { describe, expect, it } from 'vitest';
import longestCommonPrefix from '.';

describe('longestCommonPrefix', () => {
  it('should find the longest common prefix', () => {
    expect.assertions(2);

    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toStrictEqual('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toStrictEqual('');
  });
});
