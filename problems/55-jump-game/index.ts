function canJump(nums: number[]): boolean {
  const { length } = nums;

  let lastPos = length - 1;

  for (let i = length; i >= 0; i -= 1) {
    if (i + nums[i] >= lastPos) {
      lastPos = i;
    }
  }

  return lastPos === 0;
}

// function canJump(nums: number[]): boolean {
//   const { length } = nums;

//   let reachable = 0;

//   for (let i = 0; i < length; i += 1) {
//     if (reachable < i) {
//       return false;
//     }

//     reachable = Math.max(reachable, i + nums[i]);
//   }

//   return true;
// }

export default canJump;
