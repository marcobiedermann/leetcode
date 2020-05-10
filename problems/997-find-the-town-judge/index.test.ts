import findJudge from '.';

describe('findJudge', () => {
  it('should find the town judge', () => {
    expect.assertions(5);

    expect(findJudge(2, [[1, 2]])).toStrictEqual(2);
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
      ]),
    ).toStrictEqual(3);
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1],
      ]),
    ).toStrictEqual(-1);
    expect(
      findJudge(3, [
        [1, 2],
        [2, 3],
      ]),
    ).toStrictEqual(-1);
    expect(
      findJudge(4, [
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [4, 3],
      ]),
    ).toStrictEqual(3);
  });
});
