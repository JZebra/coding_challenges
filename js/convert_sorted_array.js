// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

const TreeNode = require('./leetcode_data_structures.js').TreeNode;

// recursively generate a BST by splitting nums into pivot, left, and right.
const genTree = (nums) => {
  if (nums.length === 0) {
    return null;
  }

  const node = new TreeNode();
  if (nums.length === 1) {
    node.val = nums[0];
    return node;
  }
  const pivotIdx = Math.floor(nums.length / 2);
  node.val = nums[pivotIdx];
  node.left = genTree(nums.slice(0, pivotIdx));
  node.right = genTree(nums.slice(pivotIdx + 1));
  return node;
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const sortedArrayToBST = (nums) => {
  return genTree(nums);
};

console.log(sortedArrayToBST([-93,-89,-85,-76,-56,-53,-20,-10,20,28,41,50,66,70,87,88,91,94]))
