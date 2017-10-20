// https://leetcode.com/problems/copy-list-with-random-pointer/description/

const RandomListNode = require('./leetcode_data_structures.js').RandomListNode;

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
const copyRandomList = (head) => {
  const cache = new Map();
  if (!head) {
    return null;
  }
  // create copy nodes
  let currentNode = head;
  while (currentNode) {
    cache.set(currentNode, new RandomListNode(currentNode.label));
    currentNode = currentNode.next;
  }

  // assign the .next and .random pointers
  currentNode = head;
  while (currentNode) {
    const copyNode = cache.get(currentNode);
    copyNode.next = currentNode.next ? cache.get(currentNode.next) : null;
    copyNode.random = currentNode.random ? cache.get(currentNode.random) : null;
    currentNode = currentNode.next;
  }
  return cache.get(head);
};

// 4 -> 2 -> -5 -> 10
const n0 = new RandomListNode(4);
const n1 = new RandomListNode(2);
const n2 = new RandomListNode(-5);
const n3 = new RandomListNode(10);

n0.next = n1;
n0.random = n3;
n1.next = n2;
n1.random = null;
n2.next = n3;
n2.random = n0;
n3.next = null;
n3.random = n2;
console.log(copyRandomList(n0));

// circular list
const m0 = new RandomListNode(-1);
m0.random = m0;
console.log(copyRandomList(m0));
