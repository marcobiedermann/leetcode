function checkStraightLine(coordinates: number[][]): boolean {
  const [[x0, y0], [x1, y1]] = coordinates;

  return coordinates.every(([x, y]) => (x1 - x0) * (y - y1) === (x - x1) * (y1 - y0));
}

export default checkStraightLine;
