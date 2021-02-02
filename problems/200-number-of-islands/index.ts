/* eslint-disable no-param-reassign */

function bfs(grid: string[][], row: number, column: number): void {
  if (
    row < 0 ||
    row >= grid.length ||
    column < 0 ||
    column >= grid[row].length ||
    grid[row][column] === '0'
  ) {
    return;
  }

  grid[row][column] = '0';

  bfs(grid, row + 1, column);
  bfs(grid, row - 1, column);
  bfs(grid, row, column + 1);
  bfs(grid, row, column - 1);
}

function numIslands(grid: string[][]): number {
  let count = 0;

  for (let row = 0; row < grid.length; row += 1) {
    for (let column = 0; column < grid[row].length; column += 1) {
      if (grid[row][column] === '1') {
        count += 1;

        bfs(grid, row, column);
      }
    }
  }

  return count;
}

export default numIslands;
