import search from '.';

describe('search', () => {
  it('should return the target index if it exists', () => {
    expect.assertions(2);

    expect(search([-1, 0, 3, 5, 9, 12], 9)).toStrictEqual(4);
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toStrictEqual(-1);
  });
});
