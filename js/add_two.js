// https://leetcode.com/problems/add-two-numbers/description/

// takes a ListNode and returns an int;
const parseListNode = (ln) => {
  const digitArr = [];
  let pointer = ln;
  while (pointer) {
    digitArr.push(pointer.val);
    pointer = pointer.next;
  }
  return parseInt(digitArr.join(''), 10);
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// this fails for linked lists that are larger than Number.MAX_SAFE_INTEGER
const addTwoNumbersSmall = (l1, l2) => {
  const sum = parseListNode(l1) + parseListNode(l2);
  let l3 = new ListNode();
  let pointer = l3;
  const digits = String(sum).split('').reverse();
  for (let i = 0; i < digits.length; i++) {
    pointer.val = parseInt(digits[i], 10);
    if (i < digits.length - 1) {
      pointer.next = new ListNode();
      pointer = pointer.next;
    }
  }
  return l3;
};

const addTwoNumbers = (l1, l2) => {
  let p1 = l1;
  let p2 = l2;
  const l3 = new ListNode();
  let p3 = l3;
  let carry = 0;
  let v1;
  let v2;
  while (p1 || p2 || carry) {
    if (p1) {
      v1 = p1.val;
      p1 = p1.next;
    } else {
      v1 = 0;
    }

    if (p2) {
      v2 = p2.val;
      p2 = p2.next;
    } else {
      v2 = 0;
    }

    const sum = v1 + v2 + carry;
    p3.val = (sum % 10);
    carry = Math.trunc(sum / 10);
    if (p1 || p2 || carry) {
      p3.next = new ListNode();
      p3 = p3.next;
    }
  }

  return l3;
};
