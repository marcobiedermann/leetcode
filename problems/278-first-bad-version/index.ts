type IsBadVersion = (version: number) => boolean;
type FindFirstBadVersion = (n: number) => number;

function solution(isBadVersion: IsBadVersion): FindFirstBadVersion {
  return (n: number): number => {
    let left = 1;
    let right = n;

    while (left < right) {
      const mid = left + (right - left) / 2;

      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
}

export default solution;
