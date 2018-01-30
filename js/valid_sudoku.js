const _ = require('underscore');

/**
 * @param {character[][]} board
 * @return {boolean}
 */

// represents an unfilled square
const BLANK = '.';

const isValidRow = (row) => {
  // check for duplicate numbers
  const seen = [];
  for (let i = 0; i < row.length; i++) {
    const el = row[i];
    if (seen.includes(el)) {
      return false;
    } else if (el !== BLANK) {
      seen.push(el);
    }
  }
  return true;
};

const getSubBoxCoords = () => {
  const subBoxCoords = [];
  [0, 3, 6].forEach((y) => {
    [0, 3, 6].forEach((x) => {
      subBoxCoords.push([y, x]);
    });
  });
  return subBoxCoords;
};

// startY and startX refer to the coords for the top left square of the sub box
// returns sub box elements as a 1d array
const parseSubBox = (board, startY, startX) => {
  const row = [];
  for (let y = startY; y < startY + 3; y++) {
    for (let x = startX; x < startX + 3; x++) {
      row.push(board[y][x]);
    }
  }
  return row;
};

const isValidSudoku = (board) => {
  // check all rows
  const hasValidRows = board.every(isValidRow);

  // check all columns.
  const transposed = _.zip(...board);
  const hasValidCols = transposed.every(isValidRow);

  // check all sub boxes
  const hasValidSubBoxes = getSubBoxCoords()
    .map(coords => parseSubBox(board, coords[0], coords[1])).every(isValidRow);

  return hasValidRows && hasValidCols && hasValidSubBoxes;
};

console.log(isValidSudoku([[".","8","7","6","5","4","3","2","1"],["2",".",".",".",".",".",".",".","."],["3",".",".",".",".",".",".",".","."],["4",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".",".","."],["6",".",".",".",".",".",".",".","."],["7",".",".",".",".",".",".",".","."],["8",".",".",".",".",".",".",".","."],["9",".",".",".",".",".",".",".","."]]));
// true
console.log(isValidSudoku([[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]]));
// false
