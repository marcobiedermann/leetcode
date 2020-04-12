function twoSum(nums: number[], target: number): number[] | undefined {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    const diff = target - current;

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(current, i);
  }

  return undefined;
}

export default twoSum;
