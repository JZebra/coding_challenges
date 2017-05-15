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
        node.prev.next = node.next;
        if (node.next !== null) {
            node.next.prev = node.prev;
        }
    }

    insert(node, left, right) {
        left.next = node;
        node.next = right;
        node.prev = left;
        right.prev = node;
    }

    insertAt(node, position) {
        let currentNode = this.head;
        let prev, next;
        for (var i = 0; i < position; i++) {
            prev = currentNode
            currentNode = currentNode.next;
            next = currentNode.next;
        }
        this.insert(node, prev, next);
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


}
