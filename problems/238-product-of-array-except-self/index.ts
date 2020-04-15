function productExceptSelf(nums: number[]): number[] {
  const { length } = nums;
  const result = [];

  const leftProducts = [];
  const rightProducts = [];

  leftProducts[0] = 1;
  rightProducts[length - 1] = 1;

  for (let i = 1; i < length; i += 1) {
    leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
  }

  for (let i = length - 2; i >= 0; i -= 1) {
    rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
  }

  for (let i = 0; i < length; i += 1) {
    result[i] = leftProducts[i] * rightProducts[i];
  }

  return result;
}

export default productExceptSelf;
