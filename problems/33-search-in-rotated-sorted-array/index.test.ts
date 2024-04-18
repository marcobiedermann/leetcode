import { describe, expect, it } from 'vitest';
import search from '.';

describe('search', () => {
  it('should find index of target in array', () => {
    expect.assertions(2);

    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toStrictEqual(4);
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toStrictEqual(-1);
  });
});
