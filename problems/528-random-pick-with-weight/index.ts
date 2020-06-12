class Solution {
  sum: number;

  weights: Map<number, number>;

  constructor(w: number[]) {
    this.weights = new Map<number, number>();
    this.sum = 0;

    for (let i = 0; i < w.length; i += 1) {
      this.sum += w[i];
      this.weights.set(this.sum, i);
    }
  }

  pickIndex(): number | undefined {
    const { sum, weights } = this;
    const index = Math.floor(Math.random() * sum);

    for (const key of weights.keys()) {
      if (index < key) {
        return weights.get(key);
      }
    }
  }
}

export default Solution;
