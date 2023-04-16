function longestCommonPrefix(strs: string[]): string {
  const first = strs[0];

  for (let i = 0; i < first.length; i += 1) {
    const current = first[i];

    for (let j = 1; j < strs.length; j += 1) {
      const other = strs[j];

      if (other[i] !== current) {
        return first.substring(0, i);
      }
    }
  }

  return first;
}

export default longestCommonPrefix;
