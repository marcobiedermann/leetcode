function dfs(grid: string[][], i: number, j: number): void {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
    return;
  }

  grid[i][j] = '0';

  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
}

function numIslands(grid: string[][]): number {
  let count = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === '1') {
        count += 1;
        dfs(grid, i, j);
      }
    }
  }

  return count;
}

export default numIslands;
