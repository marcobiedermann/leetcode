import reconstructQueue from '.';

describe('reconstructQueue', () => {
  it('should reconstruct the queue', () => {
    expect.assertions(1);

    expect(
      reconstructQueue([
        [7, 0],
        [4, 4],
        [7, 1],
        [5, 0],
        [6, 1],
        [5, 2],
      ]),
    ).toStrictEqual([
      [5, 0],
      [7, 0],
      [5, 2],
      [6, 1],
      [4, 4],
      [7, 1],
    ]);
  });
});
