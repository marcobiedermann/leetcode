function singleNumber(nums: number[]): number {
  const numLength = nums.length;
  const numberMap = new Map<number, number>();

  for (let i = 0; i < numLength; i += 1) {
    const current = nums[i];

    numberMap.set(current, (numberMap.get(current) || 0) + 1);
  }

  for (let i = 0; i < numLength; i += 1) {
    const current = nums[i];

    if (numberMap.get(current) === 1) {
      return current;
    }
  }
}

export default singleNumber;
