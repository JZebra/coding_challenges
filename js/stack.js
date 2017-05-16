class StackNode {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
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
        this.top = node;
    }

    pushValue(value) {
        const node = new StackNode(value, this.top)
        this.top = node;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }
}
