function canConstruct(ransomNote: string, magazine: string): boolean {
  const letterCount = new Map<string, number>();

  for (let i = 0; i < magazine.length; i += 1) {
    const current = magazine[i];

    letterCount.set(current, (letterCount.get(current) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i += 1) {
    const current = ransomNote[i];
    const count = letterCount.get(current);

    if (!count) {
      return false;
    }

    letterCount.set(current, count - 1);
  }

  return true;
}

export default canConstruct;
