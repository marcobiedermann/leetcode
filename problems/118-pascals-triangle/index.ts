function addRow(triangle: number[][]): void {
  const previous = triangle[triangle.length - 1];
  const newRow = [1];

  for (let i = 0; i < previous.length - 1; i += 1) {
    const current = previous[i];
    const next = previous[i + 1];

    newRow.push(current + next);
  }

  newRow.push(1);
  triangle.push(newRow);
}

function generate(numRows: number): number[][] {
  if (!numRows) {
    return [];
  }

  if (numRows === 1) {
    return [[1]];
  }

  const triangle = [[1], [1, 1]];

  for (let i = 2; i < numRows; i += 1) {
    addRow(triangle);
  }

  return triangle;
}

export default generate;
