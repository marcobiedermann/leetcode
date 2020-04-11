function countElements(arr: number[]): number {
  const { length } = arr;
  const set = new Set<number>(arr);

  let count = 0;

  for (let i = 0; i < length; i += 1) {
    const current = arr[i];

    if (set.has(current + 1)) {
      count += 1;
    }
  }

  return count;
}

export default countElements;
