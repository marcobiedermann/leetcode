import lastStoneWeight from '.';

describe('lastStoneWeight', () => {
  it('should return weight of last stone', () => {
    expect.assertions(1);

    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toStrictEqual(1);
  });
});
