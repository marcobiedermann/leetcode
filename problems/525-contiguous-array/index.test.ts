import findMaxLength from '.';

describe('findMaxLength', () => {
  it('should find maximum length of contigous subarray with equal number of 0 and 1', () => {
    expect.assertions(2);

    expect(findMaxLength([0, 1])).toStrictEqual(2);
    expect(findMaxLength([0, 1, 0])).toStrictEqual(2);
  });
});
