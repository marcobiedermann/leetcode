function intToDigits(int = 0): number[] {
  if (int < 10) {
    return [int];
  }

  return [...intToDigits(Math.floor(int / 10)), int % 10];
}

function isHappy(n: number, cache = new Set<number>()): boolean {
  if (cache.has(n)) {
    return false;
  }

  const digits = intToDigits(n);
  const sum = digits.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0);

  cache.add(n);

  return sum === 1 ? true : isHappy(sum, cache);
}

export default isHappy;
