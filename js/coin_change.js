// https://leetcode.com/problems/coin-change/description/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// greedy solution: reverse sort the coin denominations, decrement amount by largest
// denomination every time until amount === 0
// doesn't backtrack, so does not always find correct solution
const coinChangeGreedy = (coins, amount) => {
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
    } else {
      denomIdx += 1;
    }
  }
  return coinCount;
};

// recursive solution: iterate through coins and find f(remaining - coin)
// cache results, tracking the minCount of coins found for each subproblem
const coinChangeRecursive = (coins, remaining, cache) => {
  if (remaining < 0) {
    return -1;
  } else if (remaining === 0) {
    return 0;
  }

  if (cache[remaining] !== undefined) {
    return cache[remaining];
  }

  // init minCount to arbitrarily large number
  let minCount = Number.MAX_SAFE_INTEGER;
  coins.forEach((coin) => {
    const res = coinChangeRecursive(coins, remaining - coin, cache);
    // add one to the coin count if subproblem also returns a count
    const bestMin = cache[remaining] > 0 ? cache[remaining] : minCount;
    if (res >= 0 && res < bestMin) {
      minCount = res + 1;
    }
  });

  // set cache for subproblem to -1 if there is no solution
  cache[remaining] = minCount === Number.MAX_SAFE_INTEGER ? -1 : minCount;
  return cache[remaining];
};

const coinChangeRec = (coins, amount) => {
  const cache = {};
  // reverse sort coins, this actually avoids stack overflows if there are
  // small denomination coins
  const sortedCoins = coins.sort((a, b) => b - a);
  return coinChangeRecursive(sortedCoins, amount, cache);
};

// adapted from https://leetcode.com/problems/coin-change/solution/
const coinChange = (coins, amount) => {
  // init subproblem map. Use amount + 1 because loop will be 1-indexed
  const max = amount + 1
  const minCounts = Array(max).fill(max);
  minCounts[0] = 0;
  // loop from 1 to amount
  for (let i = 1; i < max; i++) {
    coins.forEach((coin) => {
      // ignore coins that are larger than the current subproblem amount
      if (coin <= i) {
        minCounts[i] = Math.min(minCounts[i], minCounts[i - coin] + 1);
      }
    });
  }
  return minCounts[amount] > amount ? -1 : minCounts[amount];
}

console.log(coinChange([2], 1)); // -1
console.log(coinChange([1, 7, 10], 14)); // 2
console.log(coinChange([186, 419, 83, 408], 6249)); // 20
// This exceeds stack size on the recursive solution if we do not reverse sort the coins
console.log(coinChange([3, 7, 405, 436], 8839)); // 25
