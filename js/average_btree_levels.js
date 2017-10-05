// https://leetcode.com/problems/average-of-levels-in-binary-tree/description/

const arrayMean = array => array.reduce((acc, cur) => acc + cur) / array.length;
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
const averageOfLevels = (root) => {
  // bfs through tree, tracking level
  // we can track level by keeping a queue of tuple(level, node)
  const queue = [{ level: 0, node: root }];
  const levelMap = {};
  while (queue.length > 0) {
    const { level, node } = queue.shift();
    if (node.left) {
      queue.push({ level: level + 1, node: node.left });
    }
    if (node.right) {
      queue.push({ level: level + 1, node: node.right });
    }
    // map level to array of values
    if (!levelMap[level]) {
      levelMap[level] = [];
    }
    levelMap[level].push(node.val);
  }
  // average levels and gen output
  return Object.keys(levelMap).map(level => arrayMean(levelMap[level]));
};
