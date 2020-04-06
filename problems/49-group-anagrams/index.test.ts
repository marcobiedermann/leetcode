import groupAnagrams from '.';

describe('numJewelsInStones', () => {
  it('should group anagrams together', () => {
    expect.assertions(1);

    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toStrictEqual([
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat'],
    ]);
  });
});
