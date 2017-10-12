// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let currentMin = Number.MAX_SAFE_INTEGER;
  let bestProfit = 0;
  prices.forEach((price) => {
    currentMin = price < currentMin ? price : currentMin;
    const profit = price - currentMin;
    bestProfit = profit > bestProfit ? profit : bestProfit;
  });

  return bestProfit;
};
