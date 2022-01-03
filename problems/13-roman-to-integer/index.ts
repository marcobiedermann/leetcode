const map = new Map<string, number>([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]);

function romanToInt(s: string): number {
  let result = 0;

  for (let i = 0; i < s.length; i += 1) {
    const current = map.get(s[i]) || 0;
    const next = map.get(s[i + 1]) || 0;

    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}

export default romanToInt;
