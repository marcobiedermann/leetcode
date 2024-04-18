import { describe, expect, it } from 'vitest';
import isAnagram from '.';

describe('isAnagram', () => {
  it('should check if `t` is an anagram of `s`', () => {
    expect.assertions(2);

    expect(isAnagram('anagram', 'nagaram')).toStrictEqual(true);
    expect(isAnagram('rat', 'car')).toStrictEqual(false);
  });
});
