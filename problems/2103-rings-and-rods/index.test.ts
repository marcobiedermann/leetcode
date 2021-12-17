import countPoints from '.';

describe('countPoints', () => {
  it('should count the number for rods with all three colors', () => {
    expect.assertions(1);

    expect(countPoints('B0R0G0R9R0B0G0')).toStrictEqual(1);
  });
});
