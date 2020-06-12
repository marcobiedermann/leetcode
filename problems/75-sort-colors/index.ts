function swap<T>(arr: T[], a: number, b: number): void {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

type Color = 0 | 1 | 2;

function sortColors(nums: Color[]): Color[] {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      swap(nums, low, mid);
      low += 1;
      mid += 1;
    } else if (nums[mid] === 1) {
      mid += 1;
    } else {
      swap(nums, mid, high);
      high -= 1;
    }
  }

  return nums;
}

export default sortColors;
