import findComplement from '.';

describe('findComplement', () => {
  it('should find complement number', () => {
    expect.assertions(2);

    expect(findComplement(5)).toStrictEqual(2);
    expect(findComplement(1)).toStrictEqual(0);
  });
});
