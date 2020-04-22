import subarraySum from '.';

describe('subarraySum', () => {
  it('should find total number of continuous subarrays', () => {
    expect.assertions(1);

    expect(subarraySum([1, 1, 1], 2)).toStrictEqual(2);
  });
});
