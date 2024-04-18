import { describe, expect, it } from 'vitest';
import LRUCache from '.';

describe('LRUCache', () => {
  it('should retrieve the minimum element', () => {
    expect.assertions(5);

    const cache = new LRUCache(2);

    cache.put(1, 1);
    cache.put(2, 2);

    expect(cache.get(1)).toStrictEqual(1);
    cache.put(3, 3);
    expect(cache.get(2)).toStrictEqual(-1);
    cache.put(4, 4);
    expect(cache.get(1)).toStrictEqual(-1);
    expect(cache.get(3)).toStrictEqual(3);
    expect(cache.get(4)).toStrictEqual(4);
  });
});
