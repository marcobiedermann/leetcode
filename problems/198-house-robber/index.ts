function rob(nums: number[]): number {
  const { length } = nums;

  if (!length) {
    return 0;
  }

  const dp = [];

  dp[0] = 0;
  dp[1] = nums[0];

  for (let i = 1; i < length; i += 1) {
    const current = nums[i];

    dp[i + 1] = Math.max(dp[i], dp[i - 1] + current);
  }

  return dp[length];
}

export default rob;
