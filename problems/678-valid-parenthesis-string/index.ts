function checkValidString(s: string): boolean {
  const { length } = s;

  let min = 0;
  let max = 0;

  for (let i = 0; i < length; i += 1) {
    const current = s[i];

    min += current === '(' ? 1 : -1;
    max += current !== ')' ? 1 : -1;

    if (max < 0) {
      break;
    }

    min = Math.max(min, 0);
  }

  return min === 0;
}

export default checkValidString;
