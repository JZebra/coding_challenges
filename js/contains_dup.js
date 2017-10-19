// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const numMap = {};
  // tried using a forEach, but we can't short circuit that.
  for (const num of nums) {
    if (numMap[num]) {
      return true;
    } else {
      numMap[num] = true;
    }
  };
  return false;
};
