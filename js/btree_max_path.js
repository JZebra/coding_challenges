// https://leetcode.com/problems/binary-tree-maximum-path-sum/description/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// we can think of a tree of subtrees.
// post-order traversal of the tree, with 2 relevant values
// 1. highest path value with the current node as the root (considering left and right children)
// 2. max(left path, right path), to be used by parent nodes.
const maxPathSum = (root) => {
  if (!root) {
    return 0;
  }

  const postOrderTrav = (nodeDetails) => {
    const { node, bestTerminalPath, bestContinuingPath } = nodeDetails;
    if (!node) {
      return { node: null, bestTerminalPath, bestContinuingPath };
    }

    // if the path is negative, ignore it
    const left = postOrderTrav({ node: node.left, bestTerminalPath, bestContinuingPath });
    const right = postOrderTrav({ node: node.right, bestTerminalPath, bestContinuingPath });
    const leftVal = Math.max(left.bestContinuingPath, 0);
    const rightVal = Math.max(right.bestContinuingPath, 0);

    const bestPathWithThisNodeAsRoot = leftVal + rightVal + node.val;
    const bestPathSoFar = Math.max(
      left.bestTerminalPath, right.bestTerminalPath, bestPathWithThisNodeAsRoot);
    return {
      node: null,
      bestTerminalPath: bestPathSoFar,
      bestContinuingPath: Math.max(leftVal, rightVal) + node.val,
    };
  };

  const startingNodeDetails = {
    node: root,
    bestTerminalPath: 0 - Number.MAX_SAFE_INTEGER,
    bestContinuingPath: 0,
  };
  return postOrderTrav(startingNodeDetails).bestTerminalPath;
};
