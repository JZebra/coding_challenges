// https://leetcode.com/problems/validate-binary-search-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const isValidNode = (node, min, max) => {
  if (!node) {
    return true;
  }

  return node.val > min && node.val < max;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST_BFS = (root) => {
  if (!root) {
    return true;
  }

  const queue = [ {node: root, min: -1 * Number.MAX_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER} ];
  while (queue.length > 0) {
    const { node, min, max } = queue.shift();

    if (node.left) {
      const newMax = Math.min(node.val, max)
      queue.push( {node: node.left, min: min, max: newMax} );
    }

    if (node.right) {
      const newMin = Math.max(node.val, min)
      queue.push( {node: node.right, min: newMin, max: max} );
    }

    if (!isValidNode(node, min, max)) {
      return false;
    }
  }

  return true;
};

const inOrderTraverse = (node, callback) => {
    if (!node) {
        return null;
    }
    if (node.left) {
        inOrderTraverse(node.left, callback);
    }

    callback(node)

    if (node.right) {
        inOrderTraverse(node.right, callback);
    }
}

// BSTs have node values in sorted order for in order traversal
const isValidBST = (root) => {
  let currentMin = null;
  let isSorted = true;
  inOrderTraverse(root, (node) => {
      if (currentMin != null && currentMin >= node.val) {
          isSorted = false;
      } else {
          currentMin = node.val;
      }
  });

  return isSorted;
}
