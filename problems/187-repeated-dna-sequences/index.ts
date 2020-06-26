function findRepeatedDnaSequences(s: string): string[] {
  const length = 10;

  const repeatedSequences = [];
  const map = new Map();

  for (let i = 0; i < s.length - (length - 1); i += 1) {
    const sequence = s.substring(i, i + length);

    map.set(sequence, (map.get(sequence) || 0) + 1);

    if (map.get(sequence) === 2) {
      repeatedSequences.push(sequence);
    }
  }

  return repeatedSequences;
}

export default findRepeatedDnaSequences;
