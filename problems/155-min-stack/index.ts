class MinStack {
  data: number[];

  mins: number[];

  constructor() {
    this.data = [];
    this.mins = [];
  }

  push(val: number) {
    this.data.push(val);

    if (!this.mins.length || val <= this.mins[this.mins.length - 1]) {
      this.mins.push(val);
    }
  }

  pop() {
    const x = this.data.pop();

    if (x === this.mins[this.mins.length - 1]) {
      this.mins.pop();
    }
  }

  top(): number {
    return this.data[this.data.length - 1];
  }

  getMin(): number {
    return this.mins[this.mins.length - 1];
  }
}

export default MinStack;
