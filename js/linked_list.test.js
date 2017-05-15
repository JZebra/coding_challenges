import { ListNode, LinkedList } from './linked_list';

describe('LinkedList', () => {
    it('creates a linked list from an array', () => {
        const testArray = [4, 2, 6, 12, 2];
        const linkedList = new LinkedList(testArray);
        let currentNode = linkedList.head;
        testArray.forEach((value) => {
            expect(currentNode.value).toBe(value);
            currentNode = currentNode.next;
        });
    });
    it('getValues returns the values of each node in order', () => {
        const testArray = [4, 2, 6, 12, 2];
        const linkedList = new LinkedList(testArray);
        expect(linkedList.getValues()).toEqual(expect.arrayContaining([4, 2, 6, 12, 2]));
    })
    it('dedup() will remove duplicate values', () => {
        const testArray = [4, 2, 4, 7, 2];
        const linkedList = new LinkedList(testArray);
        linkedList.dedup()
        expect(linkedList.getValues()).toEqual(expect.arrayContaining([4, 2, 7]));
    })
    it('insertAt() inserts a node at an index', () => {

    })

})
