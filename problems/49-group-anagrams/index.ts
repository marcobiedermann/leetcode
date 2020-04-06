function groupAnagrams(strs: string[]): string[][] {
  const { length } = strs;
  const groupMap = new Map<string, string[]>();
  const groups: string[][] = [];

  for (let i = 0; i < length; i += 1) {
    const current = strs[i];
    const sortedCharacters = current.split('').sort().join('');
    const existing = groupMap.get(sortedCharacters) || [];

    groupMap.set(sortedCharacters, [...existing, current]);
  }

  groupMap.forEach((value) => {
    groups.push(value);
  });

  return groups;
}

export default groupAnagrams;
