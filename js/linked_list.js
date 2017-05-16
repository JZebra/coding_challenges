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
        items.map(item => this.appendValue(item));
    }

    appendValue(value) {
        let newTail = new ListNode(value, null, null);
        this.append(newTail)
    }

    append(node) {
        let currentNode = this.head;
        let prev;
        // set prev to point to the tail
        while (currentNode !== null) {
            prev = currentNode;
            currentNode = currentNode.next;
        }
        node.prev = prev;
        prev.next = node;
        node.next = null;
    }

    prepend(node) {
        if (node === this.head) {
            throw new Error(`Cannot call prepend on the head`);
        }
        let oldHead = this.head;
        oldHead.prev = node;
        node.prev = null;
        node.next = oldHead;
        this.head = node;
    }

    getValues() {
        let currentNode = this.head;
        let values = []
        while (currentNode !== null) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return values;
    }

    delete(node) {
        // edge case, node == head
        if (node.prev == null) {
            this.head = node.next
            this.head.prev = null;
        } else {
            node.prev.next = node.next;
        }

        // edge case, node == tail
        if (node.next !== null) {
            node.next.prev = node.prev;
        }
    }

    insert(node, left, right) {
        if (left === null || right === null) {
            throw new Error('Cannot call insert() with null neighbors')
        }
        left.next = node;
        node.next = right;
        node.prev = left;
        right.prev = node;
    }

    insertAt(node, position) {
        let currentNode = this.head;
        let prev;
        for (var i = 0; i < position; i++) {
            prev = currentNode
            currentNode = currentNode.next;
        }
        this.insert(node, prev, currentNode);
    }

    dedup() {
        let seenValues = new Set([]);
        let currentNode = this.head;
        while (currentNode !== null) {
            if (seenValues.has(currentNode.value)) {
                this.delete(currentNode);
            } else {
                seenValues.add(currentNode.value);
            }
            currentNode = currentNode.next;
        }
    }

    // Return the index of the first node with the given value
    findIndex(value) {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentIndex
            }
            currentNode = currentNode.next
        }
        throw new Error(`No node with value ${value} was found`)
    }

    partition(value) {
        let currentNode = this.head;
        while (currentNode !== null) {
            let nextNode = currentNode.next;
            if (currentNode.value < value) {
                // prepend() is constant time whereas append() is linear
                this.delete(currentNode)
                this.prepend(currentNode);
            }
            currentNode = nextNode;
        }
    }
}
