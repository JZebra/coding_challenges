// https://leetcode.com/problems/sort-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const ListNode = require('./leetcode_data_structures.js').ListNode;

const merge = (list1, list2) => {
  let p1 = list1;
  let p2 = list2;
  // create a third list to store sorted elements
  const output = new ListNode(0);
  let p3 = output;

  while (p1 !== null && p2 !== null) {
    if (p1.val > p2.val) {
      p3.next = p2;
      p2 = p2.next;
    } else {
      p3.next = p1;
      p1 = p1.next;
    }
    p3 = p3.next;
  }

  if (p1 !== null) {
    p3.next = p1;
  }

  if (p2 !== null) {
    p3.next = p2;
  }

  return output.next;
};

// uses mergesort
const sortList = (head) => {
  // sane return if list is null
  if (head === null || head.next === null) {
    return head;
  }

  // divide list into 2 halves
  let slow = head;
  let fast = head;
  let tail;
  while (fast !== null && fast.next !== null) {
    tail = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  tail.next = null;
  const list1 = sortList(head);
  const list2 = sortList(slow);

  return merge(list1, list2);
};

const testList = new ListNode(3);
testList.next = new ListNode(2);
testList.next.next = new ListNode(1);
console.log(sortList(testList));
