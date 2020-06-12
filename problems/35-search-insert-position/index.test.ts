import searchInsert from '.';

describe('searchInsert', () => {
  it('should return the index of target where it would be inserted', () => {
    expect.assertions(4);

    expect(searchInsert([1, 3, 5, 6], 5)).toStrictEqual(2);
    expect(searchInsert([1, 3, 5, 6], 2)).toStrictEqual(1);
    expect(searchInsert([1, 3, 5, 6], 7)).toStrictEqual(4);
    expect(searchInsert([1, 3, 5, 6], 0)).toStrictEqual(0);
  });
});
