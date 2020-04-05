function moveZeroes(nums: number[]) {
  const { length } = nums;

  let index = 0;

  for (let i = 0; i < length; i += 1) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index += 1;
    }
  }

  for (let i = index; i < length; i += 1) {
    nums[i] = 0;
  }
}

export default moveZeroes;
