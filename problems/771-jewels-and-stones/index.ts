function numJewelsInStones(j: string, s: string): number {
  const jewels = new Set(j);
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (jewels.has(s[i])) {
      count += 1;
    }
  }

  return count;
}

// function numJewelsInStones(j: string, s: string): number {
//   const regex = new RegExp(`[${j}]`, 'g');

//   return (s.match(regex) || []).length;
// }

export default numJewelsInStones;
