import numIslands from '.';

describe('numIslands', () => {
  it('should count numbers of islands', () => {
    expect.assertions(2);

    expect(
      numIslands([
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
      ]),
    ).toStrictEqual(1);
    expect(
      numIslands([
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
      ]),
    ).toStrictEqual(3);
  });
});
