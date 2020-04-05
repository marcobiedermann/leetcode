function smallerNumbersThanCurrent(nums: number[]): number[] {
  return nums.map((number) => nums.filter((num) => number > num).length);
}

export default smallerNumbersThanCurrent;
