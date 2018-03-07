// https://leetcode.com/problems/n-queens/description/

const BLANK = '#';
const ATTACKED = '.';
const QUEEN = 'Q';

// helper function so that we don't overwrite queens
const markAttack = (board, y, x) => {
  board[y][x] = board[y][x] === QUEEN ? QUEEN : ATTACKED;
};

const markQueen = (board, ypos, xpos) => {
  const boardCopy = [];
  for (let i = 0; i < board.length; i++) {
    boardCopy[i] = board[i].slice();
  }

  if (boardCopy[ypos][xpos] !== BLANK) {
    throw Error('tried to set a queen on an attacked tile');
  }
  boardCopy[ypos][xpos] = QUEEN;
  // start at current y because previous calls to this function will have marked
  // rows above current row

  for (let y = ypos; y < boardCopy.length; y++) {
    for (let x = 0; x < boardCopy[0].length; x++) {
      // check row
      if ((x === xpos)
      // check col
      || (y === ypos)
      // check NW, SE diags
      || (y - x === ypos - xpos)
      // check NE, SW diags
      || (y - ypos === xpos - x)) {
        markAttack(boardCopy, y, x);
      }
    }
  }
  return boardCopy;
};

const createBoard = (n) => {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push(Array(n).fill(BLANK));
  }
  return board;
};

const countSquares = (board, squareType) => {
  return board.reduce((acc, row) => {
    return acc + row.reduce((acc2, cell) => {
      return cell === squareType ? acc2 + 1 : acc2;
    }, 0);
  }, 0)
};

// leetcode wants each row to be a string, not an array
const formatSolution = (board) => {
  return board.map(row => row.join(''));
}

/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {
  // each row must have a queen
  // init board
  // place initial queen and mark attacked positions
  // continue placing queens
  // if we have no possible placements, backtrack
  // store solutions
  if (n === 0 || n === 2 || n === 3) {
    return [];
  }

  const solutions = [];
  const solve = (board) => {
    const openSpaceCount = countSquares(board, BLANK);
    const queenCount = countSquares(board, QUEEN);
    const size = board.length;
    if (openSpaceCount === 0 && queenCount === size) {
      solutions.push(formatSolution(board))
    }
    // we can have max 1 queen per row, so start at current queencount
    for (let y = queenCount; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (board[y][x] === BLANK) {
          solve(markQueen(board, y, x))
        }
      }
      return false;
    }
  }

  let board = createBoard(n);
  solve(board);
  return solutions;
};

// console.log(solveNQueens(4))
// console.log(solveNQueens(6))
// console.log(solveNQueens(8))
