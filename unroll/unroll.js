function unroll(squareArray) {
  const n = square.length;
  const result = [];

  // Define starting positions and directions
  let row = 0,
    col = 0;
  let rowDir = 0,
    colDir = 1;

  for (let i = 0; i < n * n; i++) {
    // Add current element to result
    result.push(square[row][col]);

    // Mark current element as visited
    square[row][col] = undefined;

    // Compute next position and direction
    const nextRow = row + rowDir;
    const nextCol = col + colDir;

    // Check if we need to change direction
    if (
      nextRow < 0 ||
      nextRow >= n ||
      nextCol < 0 ||
      nextCol >= n ||
      square[nextRow][nextCol] === undefined
    ) {
      [rowDir, colDir] = [colDir, -rowDir];
    }

    // Update position
    row += rowDir;
    col += colDir;
  }

  return result;
}

module.exports = unroll;
