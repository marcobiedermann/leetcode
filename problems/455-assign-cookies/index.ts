function subtract(a: number, b: number): number {
  return a - b;
}

function findContentChildren(g: number[], s: number[]): number {
  g.sort(subtract);
  s.sort(subtract);

  let count = 0;
  let i = g.length - 1;
  let j = s.length - 1;

  while (i >= 0 && j >= 0) {
    if (s[j] >= g[i]) {
      count += 1;
      i -= 1;
      j -= 1;
    } else {
      i -= 1;
    }
  }

  return count;
}

export default findContentChildren;
