// https://leetcode.com/problems/binary-tree-postorder-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// recursive solution is trivial
const postorderTraversalRecursive = (root) => {
  return traverse(root).reverse();
};

const traverseRecursive = (root) => {
  if (root === null) {
    return [];
  }
  let list = [root.val];
  list = list.concat(traverseRecursive(root.right)).concat(traverseRecursive(root.left));
  return list;
};


