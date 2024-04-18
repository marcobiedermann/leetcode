import { describe, expect, it } from 'vitest';
import bagOfTokensScore from '.';

describe('bagOfTokensScore', () => {
  it('should return largest number of points', () => {
    expect.assertions(3);

    expect(bagOfTokensScore([100], 50)).toStrictEqual(0);
    expect(bagOfTokensScore([100, 200], 150)).toStrictEqual(1);
    expect(bagOfTokensScore([100, 200, 300, 400], 200)).toStrictEqual(2);
  });
});
