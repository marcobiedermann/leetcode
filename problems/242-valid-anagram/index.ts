function isAnagram(s: string, t: string): boolean {
  const sLength = s.length;
  const tLength = t.length;

  const map = new Map<string, number>();

  if (sLength !== tLength) {
    return false;
  }

  for (let i = 0; i < sLength; i += 1) {
    const current = s[i];

    map.set(current, (map.get(current) || 0) + 1);
  }

  for (let i = 0; i < tLength; i += 1) {
    const current = t[i];

    if (!map.get(current)) {
      return false;
    }

    map.set(current, (map.get(current) || 0) - 1);
  }

  return true;
}

export default isAnagram;
