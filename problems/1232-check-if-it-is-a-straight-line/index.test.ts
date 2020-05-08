import checkStraightLine from '.';

describe('checkStraightLine', () => {
  it('should check if it is a straight line', () => {
    expect.assertions(2);

    expect(
      checkStraightLine([
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 7],
      ]),
    ).toStrictEqual(true);
    expect(
      checkStraightLine([
        [1, 1],
        [2, 2],
        [3, 4],
        [4, 5],
        [5, 6],
        [7, 7],
      ]),
    ).toStrictEqual(false);
  });
});
