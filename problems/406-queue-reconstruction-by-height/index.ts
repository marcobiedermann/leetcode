function reconstructQueue(people: number[][]): number[][] {
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));

  const list: number[][] = [];

  people.forEach((person) => list.splice(person[1], 0, person));

  return list;
}

export default reconstructQueue;
