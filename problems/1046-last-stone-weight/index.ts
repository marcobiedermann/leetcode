class MaxHeap {
  data: number[];

  comparator: Function;

  constructor(data: number[]) {
    this.data = data;
    this.comparator = (a: number, b: number) => b - a;
    this.heapify();
  }

  bubbleDown(index: number) {
    const lastIndex = this.size() - 1;

    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;

      let findIndex = index;

      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }

      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }

      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;

      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapify() {
    if (this.size() < 2) {
      return;
    }

    for (let i = 1; i < this.size(); i += 1) {
      this.bubbleUp(i);
    }
  }

  offer(value: number) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  poll() {
    if (this.size() === 0) {
      return null;
    }

    const result = this.data[0];
    const last = this.data.pop();

    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }

    return result;
  }

  size() {
    return this.data.length;
  }

  swap(a: number, b: number) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }
}

function lastStoneWeight(stones: number[]): number | null {
  const heap = new MaxHeap(stones);

  while (heap.size() > 1) {
    const y = heap.poll();
    const x = heap.poll();

    if (x < y) {
      heap.offer(y - x);
    }
  }

  return heap.size() === 1 ? heap.poll() : 0;
}

export default lastStoneWeight;
