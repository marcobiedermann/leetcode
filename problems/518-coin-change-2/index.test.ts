import change from '.';

describe('change', () => {
  it('should compute the number of combinations that make up the amount', () => {
    expect.assertions(3);

    expect(change(5, [1, 2, 5])).toStrictEqual(4);
    expect(change(3, [2])).toStrictEqual(0);
    expect(change(10, [10])).toStrictEqual(1);
  });
});
