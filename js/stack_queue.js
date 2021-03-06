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

export class SetOfStacks {
    constructor(maxStackSize=10) {
        this.maxStackSize = maxStackSize;
        // this.stacks = new Stack();
        this.topStack = new Stack();
        this.stackHeight = 0;
    }

    pushToNewStack(node) {
        const oldTop = this.topStack.top;
        this.topStack = new Stack();
        this.topStack.push(node);
        this.topStack.top.next = oldTop;
        this.stackHeight = 0;
    }

    push(node) {
        if (this.stackHeight < this.maxStackSize) {
            // add to the top stack
            this.topStack.push(node);
        } else {
            // create a new stack, assign the new stack as the top stack, push into the top stack.
            this.pushToNewStack(node);
        }
        this.stackHeight++;
    }

    pushValue(value) {
        const node = new Node(value);
        this.push(node);
    }

    pop() {
        return this.topStack.pop();
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

export class QueueOfStacks {
    constructor() {
        this.stack = new Stack();
        this.flippedStack = new Stack();
    }

    add(node) {
        this.stack.push(node);
    }

    addValue(value) {
        this.stack.pushValue(value);
    }

    shift() {
        this.flip();
        const shiftedNode = this.flippedStack.pop();
        this.unflip();
        return shiftedNode;
    }

    flip() {
        while (!this.stack.isEmpty()) {
            this.flippedStack.push(this.stack.pop());
        }
    }

    unflip() {
        while (!this.flippedStack.isEmpty()) {
                this.stack.push(this.flippedStack.pop());
        }
    }

    peek() {
        this.flip();
        const topNode = this.flippedStack.peek();
        this.unflip();
        return topNode;
    }
}

// Helper functions
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

export function sortStack(stack) {
    // We're restricted to using only one additional stack.
    let sortedStack = new Stack();
    // store top element from stack
    while (stack.top !== null) {
        let topNode = stack.pop();
        sortPush(topNode, stack, sortedStack);
    }
    return sortedStack;
}


    // stack should be empty or sorted such that the smallest element is on the top
function sortPush(node, stack, sortedStack) {
    if (sortedStack.top === null || sortedStack.top.value >= node.value) {
        sortedStack.push(node)
        return;
    }
    stack.push(sortedStack.pop());
    return sortPush(node, stack, sortedStack)
}
