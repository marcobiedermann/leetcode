import firstUniqChar from '.';

describe('firstUniqChar', () => {
  it('should find first unique character in string', () => {
    expect.assertions(2);

    expect(firstUniqChar('leetcode')).toStrictEqual(0);
    expect(firstUniqChar('loveleetcode')).toStrictEqual(2);
  });
});
