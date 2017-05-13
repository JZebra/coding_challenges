export class ListNode {
    constructor(value, prev=null, next=null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

export class LinkedList {
    constructor(itemArray) {
        // copy the array so that we don't transform the input itemArray
        let items = itemArray.slice();
        this.head = new ListNode(items.shift());
        items.map(item => this.append(item));
    }

    append(value) {
        let currentNode = this.head;
        let prev;
        while (currentNode.next !== null) {
            prev = currentNode;
            currentNode = currentNode.next;
        }

        let tail = new ListNode(value, prev, null);
        currentNode.next = tail;
    }

    toString() {
        let currentNode = this.head;
        let values = []
        while (currentNode !== null) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return values;
    }
}
