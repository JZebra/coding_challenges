// https://leetcode.com/problems/binary-tree-level-order-traversal/description/
// this is really similar to https://leetcode.com/problems/average-of-levels-in-binary-tree/description/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  if (!root) {
    return [];
  }

  const queue = [{ node: root, level: 0 }];
  const values = [];
  while (queue.length > 0) {
    const { node, level } = queue.shift();
    values[level] = values[level] ? values[level] : [];
    values[level].push(node.val);

    if (node.left) {
      queue.push({ node: node.left, level: level + 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }

  return values;
};
