import stringShift from '.';

describe('stringShift', () => {
  it('should shift string', () => {
    expect.assertions(2);

    expect(
      stringShift('abc', [
        [0, 1],
        [1, 2],
      ]),
    ).toStrictEqual('cab');
    expect(
      stringShift('abcdefg', [
        [1, 1],
        [1, 1],
        [0, 2],
        [1, 3],
      ]),
    ).toStrictEqual('efgabcd');
  });
});
