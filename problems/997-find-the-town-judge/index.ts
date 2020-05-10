function findJudge(n: number, trust: number[][]): number {
  const count = new Array(n + 1).fill(0);

  for (const [i, j] of trust) {
    count[i] -= 1;
    count[j] += 1;
  }

  for (let i = 1; i <= n; i += 1) {
    if (count[i] === n - 1) {
      return i;
    }
  }

  return -1;
}

export default findJudge;
