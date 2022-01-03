import romanToInt from '.';

describe('romanToInt', () => {
  it('should convert a roman numeral to an integer', () => {
    expect.assertions(3);

    expect(romanToInt('III')).toStrictEqual(3);
    expect(romanToInt('LVIII')).toStrictEqual(58);
    expect(romanToInt('MCMXCIV')).toStrictEqual(1994);
  });
});
