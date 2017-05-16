class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
        // used for Stack.min()
        this.listMin = null;
    }
}

export class Stack {
    constructor() {
        this.top = null;
    }

    pop() {
        const topNode = this.top;
        this.top = this.top.next;
        return topNode;
    }

    push(node) {
        node.next = this.top;
        node.listMin = getMin(node.value, this.min())
        this.top = node;
    }

    pushValue(value) {
        const node = new Node(value, this.top)
        this.push(node);
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.top;
    }

    isEmpty() {
        return this.top === null;
    }

    min() {
        if (this.isEmpty()) {
            return null
        } else {
            return this.top.listMin;
        }
    }
}

export class Queue {
    constructor() {
        this.next = null;
    }

    add(node) {
        let tail;
        if (this.next === null) {
            tail = this;
        } else {
            let currentNode = this.next;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            tail = currentNode;
        }
        tail.next = node;
    }

    addValue(value) {
        const node = new Node(value);
        this.add(node);
    }

    shift() {
        const nodeToRemove = this.next;
        this.next = this.next.next;
        return nodeToRemove;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.next;
    }

    isEmpty() {
        return this.next === null;
    }
}

// Number(string) returns NaN, Number(null) returns 0. Both are falsy.
function getMin(val1, val2) {
    const num1 = Number(val1)
    const num2 = Number(val2)
    if (num1 && num2) {
        return Math.min(num1, num2)
    } else if (num1) {
        return num1;
    } else if (num2) {
        return num2;
    } else {
        return null;
    }
}
