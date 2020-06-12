import reverseString from '.';

describe('reverseString', () => {
  it('should return reversed string', () => {
    expect.assertions(2);

    expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toStrictEqual(['o', 'l', 'l', 'e', 'h']);
    expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toStrictEqual([
      'h',
      'a',
      'n',
      'n',
      'a',
      'H',
    ]);
  });
});
