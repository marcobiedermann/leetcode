function singleNonDuplicate(nums: number[]): number {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = (start + end) / 2;

    if (mid % 2 === 1) {
      mid -= 1;
    }

    if (nums[mid] !== nums[mid + 1]) {
      end = mid;
    } else {
      start = mid + 2;
    }
  }

  return nums[start];
}

export default singleNonDuplicate;
