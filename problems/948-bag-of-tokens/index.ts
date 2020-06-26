function bagOfTokensScore(tokens: number[], P: number): number {
  tokens.sort((a, b) => a - b);

  let power = P;
  let maxPoints = 0;
  let points = 0;

  let i = 0;
  let j = tokens.length - 1;

  while (i <= j) {
    if (power >= tokens[i]) {
      points += 1;
      power -= tokens[i];
      maxPoints = Math.max(maxPoints, points);
      i += 1;
    } else if (points > 0) {
      points -= 1;
      power += tokens[j];
      j -= 1;
    } else {
      return maxPoints;
    }
  }

  return maxPoints;
}

export default bagOfTokensScore;
