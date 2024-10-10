function getMaximumGold(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  // Use movement deltas for directions: [dx, dy]
  const directions = [
    [-1, 0],  // left
    [1, 0],   // right
    [0, -1],  // up
    [0, 1],   // down
  ];

  let visitedCoords: number[][] = [];
  let maxGold = 0;

  // Recursive function to explore the grid
  const chartPath = (x: number, y: number, currentGold: number): void => {
    // Mark current position as visited
    visitedCoords.push([x, y]);
    currentGold += grid[x][y]; // Collect gold from current cell

    // Track the maximum gold collected
    maxGold = Math.max(maxGold, currentGold);

    // Explore all four directions
    for (let [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      // Check if newX and newY are within bounds and not visited
      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < rows &&
        newY < cols &&
        grid[newX][newY] > 0 && // There must be gold
        !visitedCoords.some((coord) => coord[0] === newX && coord[1] === newY)
      ) {
        // Recursively explore further from the new position
        chartPath(newX, newY, currentGold);
      }
    }

    // Backtrack after exploring all directions (unvisit the current cell)
    visitedCoords = visitedCoords.filter(
      (coord) => coord[0] !== x || coord[1] !== y
    );
  };

  // find all the spots on the grid with gold and explore from each
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      if (grid[x][y] > 0) {
        chartPath(x, y, 0); // Start exploring from each gold cell
      }
    }
  }

  return maxGold;
}

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
); // Expected Output: 24
