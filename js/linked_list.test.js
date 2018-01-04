import {
  ListNode,
  LinkedList,
  sumLists,
} from './linked_list';

describe('LinkedList', () => {
  it('creates a linked list with each node pointing to the next node', () => {
    const testArray = [4, 2, 6, 12, 2];
    const linkedList = new LinkedList(testArray);
    let currentNode = linkedList.head.next;
    testArray.forEach((value) => {
      expect(currentNode.value).toBe(value);
      currentNode = currentNode.next;
    });
  });
  it('creates a linked list with each node pointing to the previous node', () => {
    const testArray = [4, 2, 6, 12, 2];
    const linkedList = new LinkedList(testArray);
    let currentNode = linkedList.tail;
    testArray.reverse().forEach((value) => {
      expect(currentNode.value).toBe(value);
      currentNode = currentNode.prev;
    });
  });
  it('tracks the tail node', () => {
    const linkedList = new LinkedList([]);
    linkedList.appendValue(2);
    expect(linkedList.tail.value).toBe(2);
    linkedList.appendValue(3);
    linkedList.appendValue(9);
    expect(linkedList.tail.value).toBe(9);
  });
  it('pop() will remove the tail and set it to the previous node', () => {
    const testArray = [4, 2, 6, 12, 2];
    const linkedList = new LinkedList(testArray);
    const twoNode = linkedList.pop();
    expect(linkedList.tail.value).toBe(12);
    const twelveNode = linkedList.pop();
    expect(linkedList.tail.value).toBe(6);
    expect(twoNode.value).toBe(2);
    expect(twelveNode.value).toBe(12);
  });
  it('getValues returns the values of each node in order', () => {
    const testArray = [4, 2, 6, 12, 2];
    const linkedList = new LinkedList(testArray);
    expect(linkedList.getValues()).toEqual([4, 2, 6, 12, 2]);
  });
  it('delete() deletes a node', () => {
    const testArray = [4, 2, 6, 12, 2];
    const linkedList = new LinkedList(testArray);
    linkedList.delete(linkedList.head.next);
    expect(linkedList.getValues()).toEqual([2, 6, 12, 2]);
    linkedList.delete(linkedList.tail);
    expect(linkedList.getValues()).toEqual([2, 6, 12]);
    linkedList.delete(linkedList.head.next.next);
    expect(linkedList.getValues()).toEqual([2, 12]);
  });
  it('dedup() will remove duplicate values', () => {
    const testArray = [4, 2, 4, 7, 2];
    const linkedList = new LinkedList(testArray);
    linkedList.dedup()
    expect(linkedList.getValues()).toEqual([4, 2, 7]);
  });
  it('insertAt() inserts a node at an index', () => {
    const testArray = [4, 2, 6, 7];
    const linkedList = new LinkedList(testArray);
    const newNode = new ListNode(100);
    linkedList.insertAt(newNode, 2)
    expect(linkedList.getValues()).toEqual([4, 2, 100, 6, 7]);
  });
  it('prepend(node) inserts a new node at the head of the list', () => {
    const testArray = [1, 2, 3];
    const linkedList = new LinkedList(testArray);
    linkedList.prepend(new ListNode(0));
    expect(linkedList.getValues()).toEqual([0, 1, 2, 3]);

  });
  it('partition(value) partitions the list into values less than/greater than the value', () => {
    const testArray = [3, 5, 8, 5, 10, 2, 1];
    const linkedList = new LinkedList(testArray);
    const partitionValue = 5;
    linkedList.partition(partitionValue);
    let currentNode = linkedList.head.next;
    let partitionBroken = false;
    while (currentNode !== null) {
      if (currentNode.value >= partitionValue) {
        partitionBroken = true;
      }
      if (partitionBroken) {
        expect(currentNode.value).toBeGreaterThanOrEqual(partitionValue);
      } else {
        expect(currentNode.value).toBeLessThan(partitionValue);
      }
      currentNode = currentNode.next;
    }
  });
  it('isPalindrome() returns true if the list is a palindrome', () => {
    const testArray1 = [1, 2, 3];
    const linkedList1 = new LinkedList(testArray1);
    expect(linkedList1.isPalindrome()).toBe(false);
    const testArray2 = [4, 2, 12, 2, 4];
    const linkedList2 = new LinkedList(testArray2);
    expect(linkedList2.isPalindrome()).toBe(true);
  });
  it('getLoopNode() returns a node if the list has an internal loop', () => {
    const testArray = [2, 3, 3, 2];
    const linkedList = new LinkedList(testArray);
    expect(linkedList.getLoopNode()).toBe(null);

    const testNode = linkedList.head.next;
    // append testNode to the tail. Don't use the LinkedList.append() function
    // because it will overwrite the .prev attr on the testNode.
    let currentNode = linkedList.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = testNode;
    expect(linkedList.getLoopNode()).toBe(testNode);
  });
});

describe('sumLists', () => {
  it('Sums two numbers represented by linked lists, where each node is a digit.', () => {
    const list1 = new LinkedList([7, 1, 6]);
    const list2 = new LinkedList([5, 9, 2]);
    const sumList = sumLists(list1, list2);
    expect(sumList.getValues()).toEqual([2, 1, 9]);
  });
});
