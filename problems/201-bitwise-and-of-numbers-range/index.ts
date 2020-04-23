function rangeBitwiseAnd(m: number, n: number): number {
  while (m < n) {
    n -= n & -n;
  }

  return n;
}

export default rangeBitwiseAnd;
