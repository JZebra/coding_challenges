// https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/

const bsearchFuzzy = require('./binary_search.js').bsearchFuzzy;

const countRight = (nums, idx) => {
  let count = 0;
  const current = nums[idx];
  for (let i = idx + 1; i < nums.length; i++) {
    if (nums[i] < current) {
      count += 1;
    }
  }
  return count;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// brute force, should be O(n^2)
const countSmallerBF = (nums) => {
  const counts = [];
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const count = countRight(nums, i);
    counts.push(count);
  }
  return counts;
};

const countSmaller = (nums) => {
  const counts = [];
  const sorted = [];
  // start from the back
  for (let i = nums.length - 1; i >= 0; i--) {
    const current = nums[i];
    const index = bsearchFuzzy(sorted, current, true);
    // .splice mutates the array;
    sorted.splice(index, 0, current);
    counts.push(index);
  }
  // pushing and reversing is faster than unshift
  return counts.reverse();
};


// console.log(countRight([5, 2, 6, 1], 0));
console.time('countSmaller')
console.log(countSmaller([5, 2, 6, 1]));
console.timeEnd('countSmaller')
