import leftMostColumnWithOne, { BinaryMatrix } from '.';

describe('leftMostColumnWithOne', () => {
  it('should return left most column containing `1`', () => {
    expect.assertions(3);

    expect(
      leftMostColumnWithOne(
        new BinaryMatrix([
          [0, 0],
          [1, 1],
        ]),
      ),
    ).toStrictEqual(0);
    expect(
      leftMostColumnWithOne(
        new BinaryMatrix([
          [0, 0],
          [0, 1],
        ]),
      ),
    ).toStrictEqual(1);
    expect(
      leftMostColumnWithOne(
        new BinaryMatrix([
          [0, 0],
          [0, 0],
        ]),
      ),
    ).toStrictEqual(-1);
  });
});
