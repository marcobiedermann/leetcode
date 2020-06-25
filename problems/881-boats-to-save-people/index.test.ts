import numRescueBoats from '.';

describe('numRescueBoats', () => {
  it('should return minimum number of boats', () => {
    expect.assertions(3);

    expect(numRescueBoats([1, 2], 3)).toStrictEqual(1);
    expect(numRescueBoats([3, 2, 2, 1], 3)).toStrictEqual(3);
    expect(numRescueBoats([3, 5, 3, 4], 5)).toStrictEqual(4);
  });
});
