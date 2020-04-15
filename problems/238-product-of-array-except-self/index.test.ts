import productExceptSelf from '.';

describe('productExceptSelf', () => {
  it('should return array that each is product of all except itself', () => {
    expect.assertions(1);

    expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
  });
});
