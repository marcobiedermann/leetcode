import sortColors from '.';

describe('sortColors', () => {
  it('should sort colors in-place', () => {
    expect.assertions(1);

    expect(sortColors([2, 0, 2, 1, 1, 0])).toStrictEqual([0, 0, 1, 1, 2, 2]);
  });
});
