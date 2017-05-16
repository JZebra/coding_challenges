import { ListNode, LinkedList } from './linked_list';

describe('LinkedList', () => {
    it('creates a linked list with each node pointing to the next node', () => {
        const testArray = [4, 2, 6, 12, 2];
        const linkedList = new LinkedList(testArray);
        let currentNode = linkedList.head;
        testArray.forEach((value) => {
            expect(currentNode.value).toBe(value);
            currentNode = currentNode.next;
        });
    });
    it('creates a linked list with each node pointing to the previous node', () =>{
        const testArray = [4, 2, 6, 12, 2];
        const linkedList = new LinkedList(testArray);
        let currentNode = linkedList.head;
        while (currentNode.next !== null) {
            // find the tail node
            currentNode = currentNode.next;
        }
        testArray.reverse().forEach((value) => {
            expect(currentNode.value).toBe(value);
            currentNode = currentNode.prev;
        });
    });
    it('getValues returns the values of each node in order', () => {
        const testArray = [4, 2, 6, 12, 2];
        const linkedList = new LinkedList(testArray);
        expect(linkedList.getValues()).toEqual(expect.arrayContaining([4, 2, 6, 12, 2]));
    });
    it('dedup() will remove duplicate values', () => {
        const testArray = [4, 2, 4, 7, 2];
        const linkedList = new LinkedList(testArray);
        linkedList.dedup()
        expect(linkedList.getValues()).toEqual(expect.arrayContaining([4, 2, 7]));
    });
    it('insertAt() inserts a node at an index', () => {
        const testArray = [4, 2, 6, 7];
        const linkedList = new LinkedList(testArray);
        const newNode = new ListNode(100);
        linkedList.insertAt(newNode, 2)
        expect(linkedList.getValues()).toEqual(expect.arrayContaining([4, 2, 100, 6, 7]));
    });
    it('prepend(node) inserts a new node at the head of the list', () =>{
        const testArray = [1, 2, 3];
        const linkedList = new LinkedList(testArray);
        linkedList.prepend(new ListNode(0));
        expect(linkedList.getValues()).toEqual(expect.arrayContaining([0, 1, 2, 3]));
    });
    it('partition(value) partitions the list into values less than/greater than the value', () => {
        const testArray = [3, 5, 8, 5, 10, 2, 1];
        const linkedList = new LinkedList(testArray);
        const partitionValue = 5;
        linkedList.partition(partitionValue);
        let currentNode = linkedList.head;
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
            currentNode = currentNode.next
        }
    });
})
