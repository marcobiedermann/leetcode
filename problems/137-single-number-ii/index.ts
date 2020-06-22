function singleNumber(nums: number[]): number | undefined {
  const { length } = nums;
  const map = new Map<number, number>();

  for (let i = 0; i < length; i += 1) {
    const current = nums[i];

    map.set(current, (map.get(current) || 0) + 1);
  }

  for (let i = 0; i < length; i += 1) {
    const current = nums[i];

    if (map.get(current) === 1) {
      return current;
    }
  }
}

export default singleNumber;
