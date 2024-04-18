import { describe, expect, it } from 'vitest';
import findContentChildren from '.';

describe('findContentChildren', () => {
  it('should maximize output', () => {
    expect.assertions(2);

    expect(findContentChildren([1, 2, 3], [1, 1])).toStrictEqual(1);
    expect(findContentChildren([1, 2], [1, 2, 3])).toStrictEqual(2);
  });
});
