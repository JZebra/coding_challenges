// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const sets = [];
  const sorted = nums.sort((a, b) => a - b);

  // fix the first number, turn the rest into a twosum problem
  for (let i = 0; i < sorted.length - 2; i++) {
    const target = 0 - sorted[i];
    const prevTarget = 0 - sorted[i - 1];
    // skip target vals until we find a new target val
    if (target === prevTarget) {
      continue;
    }
    // approach from both ends
    let leftIdx = i + 1;
    let rightIdx = sorted.length - 1;
    while (leftIdx < rightIdx) {
      const left = sorted[leftIdx];
      const right = sorted[rightIdx];
      if (left + right === target) {
        sets.push([sorted[i], left, right]);
        // skip numbers until we find a new left val and right val
        while (leftIdx < rightIdx && left === sorted[leftIdx]) {
          leftIdx += 1;
        }
        while (leftIdx < rightIdx && right === sorted[rightIdx]) {
          rightIdx -= 1;
        }
      } else if (left + right < target) {
        leftIdx += 1;
      } else if (left + right > target) {
        rightIdx -= 1;
      }
    }
  }
  return sets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
