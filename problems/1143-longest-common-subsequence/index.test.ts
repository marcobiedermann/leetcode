import longestCommonSubsequence from '.';

describe('longestCommonSubsequence', () => {
  it('should return length of longest common subsequence', () => {
    expect.assertions(3);

    expect(longestCommonSubsequence('abcde', 'ace')).toStrictEqual(3);
    expect(longestCommonSubsequence('abc', 'abc')).toStrictEqual(3);
    expect(longestCommonSubsequence('abc', 'def')).toStrictEqual(0);
  });
});
