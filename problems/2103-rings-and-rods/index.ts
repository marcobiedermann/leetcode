function countPoints(rings: string) {
  const rods = new Map<string, string[]>();

  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i];
    const rod = rings[i + 1];

    rods.set(rod, [...(rods.get(rod) || []), color]);
  }

  let count = 0;

  rods.forEach((rod) => {
    if (rod.includes('R') && rod.includes('G') && rod.includes('B')) {
      count += 1;
    }
  });

  return count;
}

export default countPoints;
