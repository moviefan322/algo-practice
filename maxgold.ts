function getMaximumGold(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (i: number, j: number, sum: number): number => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 0) {
      return sum;
    }

    let temp = grid[i][j];
    grid[i][j] = 0;
    let left = dfs(i, j - 1, sum + temp);
    let right = dfs(i, j + 1, sum + temp);
    let up = dfs(i - 1, j, sum + temp);
    let down = dfs(i + 1, j, sum + temp);
    grid[i][j] = temp;

    return Math.max(left, right, up, down);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] !== 0) {
        dfs(i, j, 0);
      }
    }
  }

  return Math.max(...grid.flat());
}

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
);
