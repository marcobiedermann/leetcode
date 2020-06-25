function numRescueBoats(people: number[], limit: number): number {
  let numBoats = 0;

  let i = 0;
  let j = people.length - 1;

  people.sort((a, b) => a - b);

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i += 1;
      j -= 1;
    } else {
      j -= 1;
    }

    numBoats += 1;
  }

  return numBoats;
}

export default numRescueBoats;
