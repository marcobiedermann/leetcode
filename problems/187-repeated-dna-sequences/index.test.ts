import findRepeatedDnaSequences from '.';

describe('findRepeatedDnaSequences', () => {
  it('should find repeated sequences', () => {
    expect.assertions(1);

    expect(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')).toStrictEqual([
      'AAAAACCCCC',
      'CCCCCAAAAA',
    ]);
  });
});
