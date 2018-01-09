// https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const OPENS = ['(', '[', '{'];
  const CLOSE_TO_OPEN_MAP = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  let stack = [];
  s.split('').forEach((char) => {
    const topChar = stack[stack.length - 1];
    // if closing parens, compare with top of stack.
    if (OPENS.includes(char)) {
      stack.push(char);
    } else if (CLOSE_TO_OPEN_MAP[char] === topChar) {
      stack.pop();
    } else {
      stack.push(char);
    }
  });
  return stack.length === 0;
};

console.log(isValid('()[]{}')); // true
console.log(isValid('([)]')); // false
console.log(isValid('([{((()))}])')); // true
