function change(amount: number, coins: number[]): number {
  const dp = new Array(amount + 1).fill(0);

  dp[0] = 1;

  coins.forEach((coin) => {
    for (let i = coin; i <= amount; i += 1) {
      dp[i] += dp[i - coin];
    }
  });

  return dp[amount];
}

export default change;
