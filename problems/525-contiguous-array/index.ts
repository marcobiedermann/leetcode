function findMaxLength(nums: number[]): number {
  const counts = new Map<number, number>();
  let max = 0;
  let count = 0;

  counts.set(0, -1);

  for (let i = 0; i < nums.length; i += 1) {
    count += nums[i] === 0 ? -1 : 1;

    if (counts.has(count)) {
      max = Math.max(max, i - counts.get(count));
    } else {
      counts.set(count, i);
    }
  }

  return max;
}

export default findMaxLength;
