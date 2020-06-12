function swap<T>(arr: T[], a: number, b: number): void {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

function reverseString<T>(s: T[]): T[] {
  const { length } = s;

  for (let i = 0; i < length / 2; i += 1) {
    swap(s, i, length - 1 - i);
  }

  return s;
}

export default reverseString;
