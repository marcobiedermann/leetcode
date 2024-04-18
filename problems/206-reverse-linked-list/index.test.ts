import { describe, expect, it } from 'vitest';
import reverseList from '.';

describe('reverseList', () => {
  it('should reverse linked list', () => {
    expect.assertions(1);

    expect(
      reverseList({
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 5,
                next: null,
              },
            },
          },
        },
      }),
    ).toStrictEqual({
      next: {
        next: {
          next: {
            next: {
              next: null,
              val: 1,
            },
            val: 2,
          },
          val: 3,
        },
        val: 4,
      },
      val: 5,
    });
  });
});
