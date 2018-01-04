class ListNode {
  constructor(value, key = null, prev = null, next = null) {
    this.value = value;
    this.key = key;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor(itemArray = []) {
    // copy the array so that we don't transform the input itemArray
    const items = itemArray.slice();
    // the head node is always a null node
    this.head = new ListNode(null);
    this.tail = this.head;
    items.map(item => this.appendValue(item));
  }

  /**
   * @param {number} value
   * @return {ListNode} appended node
   */
  appendValue(value) {
    const newTail = new ListNode(value);
    return this.append(newTail);
  }

  /**
   * @param {ListNode} node
   * @return {ListNode} appended node
   */
  append(node) {
    this.tail.next = node;
    node.prev = this.tail;
    node.next = null;
    this.tail = node;
    return node;
  }

  /**
   * @param {ListNode} node
   * @return {ListNode} prepended node
   */
  prepend(node) {
    if (this.head === this.tail) {
      this.tail = node;
    }

    node.prev = this.head;
    node.next = this.head.next;

    if (this.head.next) {
      this.head.next.prev = node;
    }

    this.head.next = node;
    return node;
  }

  /**
   * @param {number} value
   * @return {ListNode} prepended node
   */
  prependValue(value) {
    const node = new ListNode(value);
    return this.prepend(node);
  }

  /**
   * @param {void}
   * @return {array} values
   */
  getValues() {
    let currentNode = this.head.next;
    const values = [];
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }

  /**
   * @param {ListNode} node
   * @return {ListNode} removed node
   */
  delete(node) {
    node.prev.next = node.next;
    // edge case, node == tail
    if (node.next === null) {
      this.tail = node.prev;
      node.prev = null;
    } else {
      node.next.prev = node.prev;
    }

    return node;
  }

  /**
   * @param {void}
   * @return {ListNode} removed node
   */
  pop() {
    return this.delete(this.tail);
  }

  /**
   * @param {ListNode} node
   * @param {ListNode} left
   * @param {ListNode} right
   * @return {void}
   */
  insert(node, left, right) {
    if (left === null || right === null) {
      throw new Error('Cannot call insert() with null neighbors');
    }
    left.next = node;
    node.next = right;
    node.prev = left;
    right.prev = node;
  }

  /**
   * @param {ListNode} node
   * @param {number} position
   * @return {void}
   */
  insertAt(node, position) {
    let currentNode = this.head.next;
    let prev;
    for (let i = 0; i < position; i++) {
      prev = currentNode;
      currentNode = currentNode.next;
    }
    this.insert(node, prev, currentNode);
  }

  /**
   * @param {void}
   * @return {void}
   */
  dedup() {
    const seenValues = new Set([]);
    let currentNode = this.head.next;
    while (currentNode !== null) {
      if (seenValues.has(currentNode.value)) {
        this.delete(currentNode);
      } else {
        seenValues.add(currentNode.value);
      }
      currentNode = currentNode.next;
    }
  }

  /**
   * @param {number} value
   * @return {number} index of first node where node.value === value
   */
  findIndex(value) {
    let currentNode = this.head.next;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex += 1;
    }
    throw new Error(`No node with value ${value} was found`)
  }

  /**
   * @param {number} value
   * @return {void}
   * Partitions the list into a sections that are less than/greater than param.
   */
  partition(value) {
    let currentNode = this.head.next;
    while (currentNode !== null) {
      const nextNode = currentNode.next;
      if (currentNode.value < value) {
        this.delete(currentNode);
        this.prepend(currentNode);
      }
      currentNode = nextNode;
    }
  }

  /**
   * @param {void}
   * @return {Boolean} True if the entire list is a palindrome.
   */
  isPalindrome() {
    const values = this.getValues();
    let currentNode = this.head.next;
    while (currentNode !== null) {
      if (currentNode.value !== values.pop()) {
        return false;
      }
      currentNode = currentNode.next;
    }
    return true;
  }

  /**
   * @param {void}
   * @return {ListNode, null} ListNode where circular reference occurs, null otherwise
   */
  getLoopNode() {
    const seenNodes = new Set();
    let currentNode = this.head.next;
    while (currentNode !== null) {
      if (seenNodes.has(currentNode)) {
        return currentNode;
      }
      seenNodes.add(currentNode);
      currentNode = currentNode.next;
    }
    return null;
  }
}

/**
 * @param {void}
 * @return {void} all node.values converted to a single int
 */
const listToInt = list => parseInt(list.getValues().reverse().join(''), 10);

/**
 * @param {LinkedList} list1
 * @param {LinkedList} list2
 * @return {LinkedList} Sum two numbers represented by linked lists,
 * where each node is a digit, eg
 * eg, 617 + 295 = 912 is represented by
 * (7 -> 1 -> 6) + (5 -> 9 -> 2) = (2 -> 1 -> 9)
 */
const sumLists = (list1, list2) => {
  const sum = listToInt(list1) + listToInt(list2);
  const sumArray = sum.toString(10).split('').map(Number).reverse();
  return new LinkedList(sumArray);
};

module.exports = { ListNode, LinkedList, sumLists };
