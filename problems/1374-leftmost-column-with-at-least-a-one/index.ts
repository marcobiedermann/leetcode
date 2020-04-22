class BinaryMatrix {
  data: number[][];

  constructor(data: number[][]) {
    this.data = data;
  }

  get(x: number, y: number): number {
    return this.data[x][y];
  }

  dimensions() {
    return [this.data[0].length, this.data.length];
  }
}

function leftMostColumnWithOne(binaryMatrix: BinaryMatrix): number {
  const dimensions = binaryMatrix.dimensions();

  let result = -1;

  let x = dimensions[0] - 1;
  let y = dimensions[1] - 1;

  while (x >= 0 && y >= 0) {
    if (binaryMatrix.get(x, y) === 1) {
      result = y;
      y -= 1;
    } else {
      x -= 1;
    }
  }

  return result;
}

export default leftMostColumnWithOne;

export { BinaryMatrix };
