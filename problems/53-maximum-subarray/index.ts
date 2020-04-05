function maxSubArray(nums: number[]): number {
  const { length } = nums;
  let maxCurrent = nums[0];
  let maxGlobal = maxCurrent;

  for (let i = 1; i < length; i += 1) {
    const current = nums[i];

    maxCurrent = Math.max(current, maxCurrent + current);
    maxGlobal = Math.max(maxGlobal, maxCurrent);
  }

  return maxGlobal;
}

export default maxSubArray;
