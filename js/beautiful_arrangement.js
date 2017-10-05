// https://leetcode.com/problems/beautiful-arrangement/description/

/**
 * @param {number} N
 * @return {number}
 */
 // couldn't figure this one out. Translated this solution from https://discuss.leetcode.com/topic/79974/python-recursion-dp-66ms
const countArrangement = (N) => {
  const helper = (n, possibilities) => {
    if (n === 1) {
      return 1;
    }

    let total = 0;
    for (let i = 0; i < possibilities.length; i++) {
      const current = possibilities[i];
      if (current % n === 0 || n % current === 0) {
        const newPoss = possibilities.slice(0, i).concat(possibilities.slice(i + 1));
        total += helper(n - 1, newPoss);
      }
    }
    return total;
  };

  const possibilities = [...Array(N).keys()].map((el) => { return el + 1; });
  return helper(N, possibilities);
};
