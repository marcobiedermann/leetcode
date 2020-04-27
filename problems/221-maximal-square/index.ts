function maximalSquare(matrix: string[][]): number {
  if (!matrix.length) {
    return 0;
  }

  const dp = new Array(matrix.length + 1)
    .fill(0)
    .map(() => new Array(matrix[0].length + 1).fill(0));

  let max = 0;

  for (let i = 1; i < dp.length; i += 1) {
    for (let j = 1; j < dp[0].length; j += 1) {
      if (matrix[i - 1][j - 1] !== '0') {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
        max = Math.max(dp[i][j], max);
      }
    }
  }

  return max ** 2;
}

const output = maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]);

output;

export default maximalSquare;
