function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i += 1) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let lo = i + 1;
      let hi = nums.length - 1;

      while (lo < hi) {
        const sum = nums[i] + nums[lo] + nums[hi];

        if (sum === 0) {
          result.push([nums[i], nums[lo], nums[hi]]);

          while (lo < hi && nums[lo] === nums[lo + 1]) {
            lo += 1;
          }

          while (lo < hi && nums[hi] === nums[hi - 1]) {
            hi -= 1;
          }

          lo += 1;
          hi -= 1;
        } else if (sum < 0) {
          lo += 1;
        } else {
          hi -= 1;
        }
      }
    }
  }

  return result;
}

export default threeSum;
