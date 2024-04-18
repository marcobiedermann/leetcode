import { describe, expect, it } from 'vitest';
import generate from '.';

describe('generate', () => {
  it('should generate pascals triangle', () => {
    expect.assertions(3);

    expect(generate(0)).toStrictEqual([]);
    expect(generate(1)).toStrictEqual([[1]]);
    expect(generate(5)).toStrictEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });
});
