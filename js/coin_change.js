// https://leetcode.com/problems/coin-change/description/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  // greedy solution: reverse sort the coin denominations, decrement amount by largest
  // denomination every time until amount === 0
  const denoms = coins.sort((a, b) => b - a);
  let remaining = amount;
  let coinCount = 0;
  let denomIdx = 0;
  while (remaining > 0) {
    // unable to make change
    if (denomIdx > denoms.length) {
      return -1;
    }
    const denom = denoms[denomIdx];
    if (denom <= remaining) {
      remaining -= denom;
      coinCount += 1;
      console.log(denom, remaining, coinCount);
    } else {
      denomIdx += 1;
    }
  }
  return coinCount;
};

// console.log(coinChange([2], 1)); // -1
console.log(coinChange([186, 419, 83, 408], 6249)); // 20
