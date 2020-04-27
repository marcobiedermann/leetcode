import maximalSquare from '.';

describe('maximalSquare', () => {
  it('should return largest square', () => {
    expect.assertions(1);

    expect(
      maximalSquare([
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
      ]),
    ).toStrictEqual(4);
  });
});
