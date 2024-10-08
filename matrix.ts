// You are given an n x n integer matrix grid.

// Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

// maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
// In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

// Return the generated matrix.

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

var largestLocal = function (grid: number[][]) {
  const outputRows = grid.length - 2;
  let output: number[][] = [];

  // Loop through each 3x3 submatrix
  for (let i = 0; i < outputRows; i++) {
    let set: number[] = [];
    let rowOutput: number[] = []; // To store the maximum of each 3x3 submatrix

    // Inner loop for traversing columns
    for (let j = 0; j < outputRows; j++) {
      // Find the largest value in the 3x3 block starting at grid[i][j]
      let maxVal = -Infinity;
      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          maxVal = Math.max(maxVal, grid[x][y]);
        }
      }

      // Push the max value from the 3x3 submatrix to rowOutput
      rowOutput.push(maxVal);
    }

    // Push the rowOutput to output (which will store the max values of all 3x3 blocks)
    output.push(rowOutput);
  }

  return output; // Output the maxLocal matrix
};

var test = [
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
];

console.log(largestLocal(test));
