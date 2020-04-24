class LRUCache {
  capacity: number;

  cache: Map<number, number | undefined>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map<number, number | undefined>();
  }

  get(key: number): number | undefined {
    if (!this.cache.has(key)) {
      return -1;
    }

    const v = this.cache.get(key);

    this.cache.delete(key);
    this.cache.set(key, v);

    return this.cache.get(key);
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}

export default LRUCache;
