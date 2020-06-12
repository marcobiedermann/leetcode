import sortColors, { Color } from '.';

describe('sortColors', () => {
  it('should sort colors in-place', () => {
    expect.assertions(1);

    const colors: Color[] = [2, 0, 2, 1, 1, 0];

    sortColors(colors);

    expect(colors).toStrictEqual([0, 0, 1, 1, 2, 2]);
  });
});
