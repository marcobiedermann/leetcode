import middleNode from '.';

describe('middleNode', () => {
  it('should return middle node in linked list', () => {
    expect.assertions(2);

    expect(
      middleNode({
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
      next: { next: { next: null, val: 5 }, val: 4 },
      val: 3,
    });
    expect(
      middleNode({
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: {
                val: 5,
                next: {
                  val: 6,
                  next: null,
                },
              },
            },
          },
        },
      }),
    ).toStrictEqual({ next: { next: { next: null, val: 6 }, val: 5 }, val: 4 });
  });
});
