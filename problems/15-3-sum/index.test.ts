import threeSum from '.';

describe('threeSum', () => {
  it('should return all triples which sum is `0`', () => {
    expect.assertions(3);

    expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
    expect(threeSum([])).toStrictEqual([]);
    expect(threeSum([0])).toStrictEqual([]);
  });
});
