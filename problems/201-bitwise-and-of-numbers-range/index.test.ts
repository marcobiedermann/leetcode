import rangeBitwiseAnd from '.';

describe('rangeBitwiseAnd', () => {
  it('should return bitwise AND of all numbers in range', () => {
    expect.assertions(2);

    expect(rangeBitwiseAnd(5, 7)).toStrictEqual(4);
    expect(rangeBitwiseAnd(0, 1)).toStrictEqual(0);
  });
});
