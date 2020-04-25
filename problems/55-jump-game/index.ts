function canJump(nums: number[]): boolean {
  const { length } = nums;

  let lastPos = length - 1;

  for (let i = length; i >= 0; i -= 1) {
    if (i + nums[i] >= lastPos) {
      lastPos = i;
    }
  }

  return lastPos === 0;
}

export default canJump;
