import isPalindrome from '.';

describe('isPalindrome', () => {
  it('should check if the phrase is a palindrome', () => {
    expect.assertions(3);

    expect(isPalindrome('A man, a plan, a canal: Panama')).toStrictEqual(true);
    expect(isPalindrome('race a car')).toStrictEqual(false);
    expect(isPalindrome(' ')).toStrictEqual(true);
  });
});
