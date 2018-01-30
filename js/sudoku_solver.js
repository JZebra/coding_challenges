const { parseSubBox } = require('./valid_sudoku');
const _ = require('underscore');

const subBoxVals = (board, ypos, xpos) => {
  const startY = Math.floor(ypos / 3) * 3;
  const startX = Math.floor(xpos / 3) * 3;
  return parseSubBox(board, startY, startX);
};

const BLANK = '.';

const isValidPlacement = (board, value, ypos, xpos) => {
  const size = board.length;
  // check row
  // early return if any check fails
  for (let x = 0; x < size; x++) {
    if (board[ypos][x] === value) {
      return false;
    }
  }
  // check col
  for (let y = 0; y < size; y++) {
    if (board[y][xpos] === value) {
      return false;
    }
  }
  // check sub box
  const subBox = subBoxVals(board, ypos, xpos);
  for (let i = 0; i < subBox.length; i++) {
    if (subBox[i] === value) {
      return false;
    }
  }
  return true;
};

const solve = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // try all possibilities
      if (board[i][j] === BLANK) {
        for (let val = 1; val < 10; val++) {
          val = val.toString();
          // console.log(`checking ${i} ${j} ${val}`)
          if (isValidPlacement(board, val, i, j)) {
            board[i][j] = val;
            if (solve(board)) {
              return true;
            } else {
              board[i][j] = BLANK;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
  if (board === null || board.length === 0) {
    return false;
  }
  solve(board);
  console.log(board)
};

// solveSudoku([[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]]);
solveSudoku([[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]]);
