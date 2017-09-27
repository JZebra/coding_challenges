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
  return traverseRecursive(root).reverse();
};

const traverseRecursive = (root) => {
  if (root === null) {
    return [];
  }
  let list = [root.val];
  list = list.concat(traverseRecursive(root.right)).concat(traverseRecursive(root.left));
  return list;
};

// huh. Iterative isn't much harder
const postorderTraversal = (root) => {
  // traverse tree with dfs
  const values = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current === null) {
      continue;
    }
    values.push(current.val);
    stack.push(current.left);
    stack.push(current.right);
  }
  return values.reverse();
};
