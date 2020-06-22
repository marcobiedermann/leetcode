import rob from '.';

describe('rob', () => {
  it('should return maximum amount', () => {
    expect.assertions(2);

    expect(rob([1, 2, 3, 1])).toStrictEqual(4);
    expect(rob([2, 7, 9, 3, 1])).toStrictEqual(12);
  });
});
