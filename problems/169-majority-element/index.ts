function majorityElement(nums: number[]): number | undefined {
  const { length } = nums;

  let candidate;
  let count = 0;

  for (let i = 0; i < length; i += 1) {
    const current = nums[i];

    if (count === 0) {
      candidate = current;
    }

    count += current === candidate ? 1 : -1;
  }

  return candidate;
}

export default majorityElement;
