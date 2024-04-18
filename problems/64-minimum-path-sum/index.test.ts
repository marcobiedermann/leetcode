import { describe, expect, it } from 'vitest';
import minPathSum from '.';

describe('minPathSum', () => {
  it('should find the shortest path', () => {
    expect.assertions(1);

    expect(
      minPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ]),
    ).toStrictEqual(7);
  });
});
