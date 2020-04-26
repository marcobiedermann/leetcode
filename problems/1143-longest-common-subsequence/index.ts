function longestCommonSubsequence(
  text1: string,
  text2: string,
  n = text1.length,
  m = text2.length,
): number {
  let result = 0;

  if (n === 0 || m === 0) {
    result = 0;
  } else if (text1[n - 1] === text2[m - 1]) {
    result = 1 + longestCommonSubsequence(text1, text2, n - 1, m - 1);
  } else if (text1[n - 1] !== text2[n - 1]) {
    result = Math.max(
      longestCommonSubsequence(text1, text2, n - 1, m),
      longestCommonSubsequence(text1, text2, n, m - 1),
    );
  }

  return result;
}

export default longestCommonSubsequence;
