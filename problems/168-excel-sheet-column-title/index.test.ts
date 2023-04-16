import convertToTitle from '.';

describe('convertToTitle', () => {
  it('should return its corresponding colum title', () => {
    expect.assertions(3);

    expect(convertToTitle(1)).toStrictEqual('A');
    expect(convertToTitle(28)).toStrictEqual('AB');
    expect(convertToTitle(701)).toStrictEqual('ZY');
  });
});
