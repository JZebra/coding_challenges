// https://leetcode.com/problems/battleships-in-a-board/description/

const isBattleship = (board, x, y) => {
  const checkX = x === 0 || board[y][x - 1] === '.';
  const checkY = y === 0 || board[y - 1][x] === '.';
  return board[y][x] === 'X' && checkX && checkY;
};

/**
 * @param {character[][]} board
 * @return {number}
 */
const countBattleships = (board) => {
  if (board.length === 0) {
    return 0;
  }

  // walk once over all cells.
  return board.reduce((acc1, row, y) => {
    return acc1 + row.reduce((acc2, cell, x) => {
      const count = isBattleship(board, x, y) ? 1 : 0;
      return acc2 + count;
    }, 0);
  }, 0);
};

