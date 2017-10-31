// https://leetcode.com/problems/game-of-life/description/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// return 1 if alive, 0 if dead
const calcTile = (currentStatus, numNeighbors) => {
  if (currentStatus === 1 && (numNeighbors === 2 || numNeighbors === 3)) {
    return 1;
  }
  if (currentStatus === 0 && numNeighbors === 3) {
    return 1;
  }

  return 0;
};

// increment the numNeighbors value for the 8 neighbors around a tile
const addNeighbors = (nBoard, x, y) => {
  const xMax = nBoard[0].length - 1;
  const yMax = nBoard.length - 1;

  for (let i = y - 1; i <= y + 1; i++) {
    // check bounds
    if (i < 0 || i > yMax) {
      continue;
    }

    for (let j = x - 1; j <= x + 1; j++) {
      // check bounds
      if (j < 0 || j > xMax) {
        continue;
      }
      // don't increment the center tile
      if (i === y && j === x) {
        continue;
      }
      // todo: refactor to call a setter function on nboard
      nBoard[i][j] += 1;
    }
  }
};

// walk the board once and count the number of live neighbors for each tile.
// if a tile.value === 1, increment all 8 neighbors by 1
// walk the board again and transform the number values into 1 or 0
const gameOfLife = (board) => {
  const yLen = board.length;
  const xLen = board[0].length;

  // neighborBoard, tracks the number of live cells around each cell.
  // todo: create a class with getter/setters
  const nBoard = new Array(yLen).fill().map(row => { return Array(xLen).fill(0) });
  // first pass, generate the nboard
  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      if (board[y][x] === 1) {
        addNeighbors(nBoard, x, y);
      }
    }
  }

  // second pass, determine next gen tile values
  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      const currentStatus = board[y][x];
      const numNeighbors = nBoard[y][x];
      board[y][x] = calcTile(currentStatus, numNeighbors);
    }
  }
};


console.log(gameOfLife([[1, 1]]));
