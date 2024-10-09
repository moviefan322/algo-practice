function matrixScore(grid: number[][]): number {
  let gridCopy = grid.map((row) => [...row]);
  const rows = grid.length;
  const cols = grid[0].length;

  const flipRow = (rowIndex: number) => {
    for (let i = 0; i < cols; i++) {
      gridCopy[rowIndex][i] = gridCopy[rowIndex][i] === 0 ? 1 : 0;
    }
  };

  const flipColumn = (colIndex: number) => {
    for (let i = 0; i < rows; i++) {
      gridCopy[i][colIndex] = gridCopy[i][colIndex] === 0 ? 1 : 0;
    }
  };

  for (let i = 0; i < rows; i++) {
    if (gridCopy[i][0] === 0) {
      flipRow(i);
    }
  }

  for (let j = 1; j < cols; j++) {
    let colSum = 0;
    for (let i = 0; i < rows; i++) {
      colSum += gridCopy[i][j];
    }
    if (colSum < rows / 2) {
      flipColumn(j);
    }
  }

  let output = 0;
  for (let i = 0; i < rows; i++) {
    let binaryValue = 0;
    for (let j = 0; j < cols; j++) {
      binaryValue = (binaryValue << 1) | gridCopy[i][j];
    }
    output += binaryValue;
  }


  return output;
}

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ])
);
