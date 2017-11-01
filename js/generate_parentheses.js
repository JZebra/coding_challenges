// https://leetcode.com/problems/generate-parentheses/description/

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  if (n < 1) {
    return ''
  }
  return recursiveParen('', n, 0);
};

const recursiveParen = (str, openParen, closeParen) => {
  let res = [];
  if (openParen === 0 && closeParen === 0) {
    res.push(str)
    return res;
  }

  if (openParen > 0) {
    res = res.concat(recursiveParen(str + '(', openParen - 1, closeParen + 1));
  }
  if (closeParen > 0) {
    res = res.concat(recursiveParen(str + ')', openParen, closeParen - 1));
  }

  return res;
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
