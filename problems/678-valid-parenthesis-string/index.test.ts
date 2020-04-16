import checkValidString from '.';

describe('checkValidString', () => {
  it('should check if string is valid', () => {
    expect.assertions(3);

    expect(checkValidString('()')).toStrictEqual(true);
    expect(checkValidString('(*)')).toStrictEqual(true);
    expect(checkValidString('(*))')).toStrictEqual(true);
  });
});
