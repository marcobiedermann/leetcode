import smallerNumbersThanCurrent from '.';

describe('smallerNumbersThanCurrent', () => {
  it('should return mapped array with numbers smaller than current', () => {
    expect.assertions(3);

    expect(smallerNumbersThanCurrent([8, 1, 2, 2, 3])).toStrictEqual([4, 0, 1, 1, 3]);
    expect(smallerNumbersThanCurrent([6, 5, 4, 8])).toStrictEqual([2, 1, 0, 3]);
    expect(smallerNumbersThanCurrent([7, 7, 7, 7])).toStrictEqual([0, 0, 0, 0]);
  });
});
