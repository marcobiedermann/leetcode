function findComplement(num: number): number {
  let k = num;
  let c = 0;

  while (k > 0) {
    k = Math.floor(k / 2);
    c += 1;
  }

  const j = 2 ** c - 1;

  return j ^ num;
}

export default findComplement;
