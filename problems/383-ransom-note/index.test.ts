import canConstruct from '.';

describe('canConstruct', () => {
  it('should check if note can be constructed from magazin', () => {
    expect.assertions(3);

    expect(canConstruct('a', 'b')).toStrictEqual(false);
    expect(canConstruct('aa', 'ab')).toStrictEqual(false);
    expect(canConstruct('aa', 'aab')).toStrictEqual(true);
  });
});
