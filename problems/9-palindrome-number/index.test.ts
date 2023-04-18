import isPalindrome from '.';

describe('isPalindrome', () => {
  it('should check if number is a palindrome', () => {
    expect.assertions(3);

    expect(isPalindrome(121)).toStrictEqual(true);
    expect(isPalindrome(-121)).toStrictEqual(false);
    expect(isPalindrome(10)).toStrictEqual(false);
  });
});
