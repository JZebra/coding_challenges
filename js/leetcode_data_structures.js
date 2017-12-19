class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class RandomListNode {
  constructor(label) {
    this.label = label;
    this.next = null;
    this.random = null;
  }
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

module.exports.RandomListNode = RandomListNode;
module.exports.TreeNode = TreeNode;
module.exports.ListNode = ListNode;
