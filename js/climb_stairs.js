// https://leetcode.com/problems/climbing-stairs/description/

/**
 * @param {number} n
 * @return {number}
 */

// Each step is climbing 1 or 2 stairs, which means that there are 2 subproblems
// each time we climb.
// memoize subproblems to improve performance.
const climbStairs = (n) => {
  const cache = {};
  const climbRecursive = (n) => {
    if (n === 1) {
      return 1;
    }
    if (n === 2) {
      return 2;
    }
    if (cache[n]) {
      return cache[n];
    }

    cache[n] = climbRecursive(n - 1) + climbRecursive(n - 2);
    return cache[n];
  };

  return climbRecursive(n);
};

