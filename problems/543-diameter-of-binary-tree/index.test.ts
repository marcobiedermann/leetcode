import { describe, expect, it } from 'vitest';
import diameterOfBinaryTree from '.';

describe('diameterOfBinaryTree', () => {
  it('should return diameter of binary tree', () => {
    expect.assertions(1);

    expect(
      diameterOfBinaryTree({
        val: 1,
        left: {
          val: 2,
          left: {
            val: 4,
            left: null,
            right: null,
          },
          right: {
            val: 5,
            left: null,
            right: null,
          },
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      }),
    ).toStrictEqual(3);
  });
});
