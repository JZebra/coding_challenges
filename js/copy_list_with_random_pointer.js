// https://leetcode.com/problems/copy-list-with-random-pointer/description/

const RandomListNode = require('./leetcode_data_structures.js').RandomListNode;

// find a node with the same label as target.label
// returns null if no node is found or either parameter is falsy
// const findNode = (head, target) => {
//   if (!head || !target) {
//     return null;
//   }
//   let currentNode = head;
//   while (currentNode) {
//     // if (currentNode.label === label && currentNode.next.label === nextLabel) {
//     if (currentNode.label === target.label) {
//       return currentNode;
//     }
//     currentNode = currentNode.next;
//   }
//   return null;
// };

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
const copyRandomList = (head) => {
  const cache = {};
  const copyList = (head) => {
    if (!head) {
      return null;
    }
    let currentNode = head;
    const copyHead = new RandomListNode();
    let currentCopyNode = copyHead;
    while (currentNode) {
      currentCopyNode.label = currentNode.label;
      // memoize a map of string representation of node: node object
      cache[JSON.stringify(currentCopyNode)] = currentCopyNode;
      if (currentNode.next) {
        currentCopyNode.next = new RandomListNode();
      }
      currentNode = currentNode.next;
      currentCopyNode = currentCopyNode.next;
    }
    return copyHead;
  };

  let currentNode = head;
  const copy = copyList(head);
  let currentCopyNode = copy;
  while (currentNode) {
    // walk the linked list and find the node that the random pointer refers to
    // const node = findNode(head, currentNode.random.label);
    // walk the copy and find the same node and assign copyNode.random
    if (currentNode.random) {
      // detect cycle
      if (currentNode.random.label === currentNode.label && currentNode.random.next === currentNode.next) {
        currentCopyNode.random = currentCopyNode;
      } else {
        const copyNode = cache[JSON.stringify(currentNode)];
        currentCopyNode.random = copyNode;
      }
    }
    currentNode = currentNode.next;
    currentCopyNode = currentCopyNode.next;
  }
  return copy;
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

