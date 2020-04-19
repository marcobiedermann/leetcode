function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (nums[mid] <= target && target <= nums[high]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

export default search;
