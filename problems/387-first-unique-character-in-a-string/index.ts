function firstUniqChar(s: string): number {
  const { length } = s;
  const map = new Map<string, number>();

  for (let i = 0; i < length; i += 1) {
    const current = s[i];

    map.set(current, (map.get(current) || 0) + 1);
  }

  for (let i = 0; i < length; i += 1) {
    const current = s[i];

    if (map.get(current) === 1) {
      return i;
    }
  }

  return -1;
}

export default firstUniqChar;
