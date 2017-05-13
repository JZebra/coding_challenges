import { ListNode, LinkedList } from './linked_list';

describe('LinkedList', () => {
    it('creates a linked list from an array', () => {
        const testArray = [4, 2, 6, 12, 2];
        const linkedList = new LinkedList(testArray);
        let currentNode = linkedList.head;
        testArray.forEach((value) => {
            expect(currentNode.value).toBe(value);
            currentNode = currentNode.next;
        })
    })
})
