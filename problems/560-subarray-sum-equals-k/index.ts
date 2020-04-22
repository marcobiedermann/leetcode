function subarraySum(nums: number[], k: number): number {
  const map = new Map();

  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

export default subarraySum;
