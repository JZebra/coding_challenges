// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

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

// this is btree_level_order_traversal with an extra conditional.
const zigzagLevelOrder = (root) => {
  if (!root) {
    return [];
  }

  const queue = [{ node: root, level: 0 }];
  const values = [];
  while (queue.length > 0) {
    const { node, level } = queue.shift();
    if (!node) {
      continue;
    }
    values[level] = values[level] ? values[level] : [];
    queue.push({ node: node.left, level: level + 1 });
    queue.push({ node: node.right, level: level + 1 });

    const levelMovingLeftToRight = level % 2 === 0;
    if (levelMovingLeftToRight) {
      values[level].push(node.val);
    } else {
      values[level].unshift(node.val);
    }
  }

  return values;
};
