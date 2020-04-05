function maxProfit(prices: number[]): number {
  const { length } = prices;
  let profit = 0;

  for (let i = 0; i < length - 1; i += 1) {
    const current = prices[i];
    const next = prices[i + 1];

    if (next > current) {
      profit += next - current;
    }
  }

  return profit;
}

export default maxProfit;
