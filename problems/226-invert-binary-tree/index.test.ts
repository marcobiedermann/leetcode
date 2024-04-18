import { describe, expect, it } from 'vitest';
import invertTree from '.';

describe('invertTree', () => {
  it('should invert binary tree', () => {
    expect.assertions(1);

    expect(
      invertTree({
        val: 4,
        left: {
          val: 2,
          left: {
            val: 1,
            left: null,
            right: null,
          },
          right: {
            val: 3,
            left: null,
            right: null,
          },
        },
        right: {
          val: 7,
          left: {
            val: 6,
            left: null,
            right: null,
          },
          right: {
            val: 9,
            left: null,
            right: null,
          },
        },
      }),
    ).toStrictEqual({
      val: 4,
      left: {
        left: {
          left: null,
          right: null,
          val: 9,
        },
        right: {
          left: null,
          right: null,
          val: 6,
        },
        val: 7,
      },
      right: {
        left: {
          left: null,
          right: null,
          val: 3,
        },
        right: {
          left: null,
          right: null,
          val: 1,
        },
        val: 2,
      },
    });
  });
});
