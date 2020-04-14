function stringShift(s: string, shift: [number, number][]): string {
  const { length } = shift;
  let shifted = s;

  for (let i = 0; i < length; i += 1) {
    const [direction, amount] = shift[i];

    if (direction) {
      const a = shifted.slice(-amount);
      const b = shifted.slice(0, -amount);

      shifted = a + b;
    } else {
      const a = shifted.slice(0, amount);
      const b = shifted.slice(amount);

      shifted = b + a;
    }
  }

  return shifted;
}

export default stringShift;
