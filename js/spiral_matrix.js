// https://leetcode.com/problems/spiral-matrix/description/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  // return the matrix with outer layer removed
  const subMatrix = (matrix) => {
    const width = matrix[0].length;
    const height = matrix.length;
    const innerLayer = [];
    if (width <= 2 || height <= 2) {
      return [[]];
    }

    for (let y = 1; y < height - 1; y++) {
      const row = [];
      for (let x = 1; x < width - 1; x++) {
        row.push(matrix[y][x]);
      }
      innerLayer.push(row);
    }

    return innerLayer;
  };


  const spiralLayer = (matrix) => {
    if (matrix.length === 0) {
      return [];
    }
    if (matrix[0].length === 0) {
      return [];
    }

    const xMax = matrix[0].length - 1;
    const yMax = matrix.length - 1;
    let xPos = 0;
    let yPos = 0;
    const layer = [matrix[yPos][xPos]];
    let movedDown = false;
    let movedLeft = false;
    // move right
    for (let i = 0; i < xMax; i++) {
      xPos += 1;
      layer.push(matrix[yPos][xPos]);
    }

    // move down
    for (let i = 0; i < yMax; i++) {
      yPos += 1;
      layer.push(matrix[yPos][xPos]);
      movedDown = true;
    }

    // move left
    if (movedDown) {
      for (let i = 0; i < xMax; i++) {
        xPos -= 1;
        layer.push(matrix[yPos][xPos]);
        movedLeft = true;
      }
    }

    // move up
    if (movedLeft) {
      for (let i = 0; i < yMax - 1; i++) {
        yPos -= 1;
        layer.push(matrix[yPos][xPos]);
      }
    }

    const innerLayer = spiralLayer(subMatrix(matrix));
    return layer.concat(innerLayer);
  };

  return spiralLayer(matrix);
};

console.log(spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]));

console.log(spiralOrder([[2,3]]));
