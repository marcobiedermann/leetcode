import singleNonDuplicate from '.';

describe('singleNonDuplicate', () => {
  it('should find single non duplicate in array', () => {
    expect.assertions(2);

    expect(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])).toStrictEqual(2);
    expect(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])).toStrictEqual(10);
  });
});
