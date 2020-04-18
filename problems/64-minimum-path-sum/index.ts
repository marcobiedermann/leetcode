function minPathSum(grid: number[][]): number {
  const dp: number[][] = [[]];

  dp[0][0] = grid[0][0];

  for (let i = 1; i < grid.length; i += 1) {
    dp.push([]);

    dp[i][0] = grid[i][0] + dp[i - 1][0];
  }

  for (let i = 1; i < grid[0].length; i += 1) {
    dp[0][i] = grid[0][i] + dp[0][i - 1];
  }

  for (let i = 1; i < grid.length; i += 1) {
    for (let j = 1; j < grid[i].length; j += 1) {
      const a = dp[i - 1][j];
      const b = dp[i][j - 1];

      dp[i][j] = Math.min(a, b) + grid[i][j];
    }
  }

  return dp[dp.length - 1][dp[0].length - 1];
}

export default minPathSum;
