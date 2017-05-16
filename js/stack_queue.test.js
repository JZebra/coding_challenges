import { Stack, Queue, SetOfStacks } from './stack_queue';

describe('Stack', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
        stack.pushValue('stack it');
    })
    test('creates a stack', () => {
        expect(stack.top.value).toBe('stack it');
    });
    test('peek() returns the top node', () => {
        expect(stack.peek().value).toBe('stack it');
    });
    test('pushValue(value) adds a node to the top of the stack', () => {
        stack.pushValue(3);
        expect(stack.peek().value).toBe(3);
    });
    test('isEmpty() returns the correct boolean', () => {
        expect(stack.isEmpty()).toBe(false);
        const emptyStack = new Stack();
        expect(emptyStack.isEmpty()).toBe(true);
    });
    test('pop() removes and returns the top node', () => {
        stack.pushValue(42);
        expect(stack.pop().value).toBe(42);
        expect(stack.pop().value).toBe('stack it');
    });
    test('min() returns the min value in the stack', () => {
        expect(stack.min()).toBe(null);
        stack.pushValue(42)
        expect(stack.min()).toBe(42);
        stack.pushValue(8)
        expect(stack.min()).toBe(8);
        stack.pushValue(8)
        expect(stack.min()).toBe(8);
        stack.pushValue(5)
        expect(stack.min()).toBe(5);
        stack.pushValue(23)
        expect(stack.min()).toBe(5);
    });
});


describe('Queue', () => {
    let queue;
    beforeEach(() => {
        queue = new Queue();
        queue.addValue('queue it');
    })
    test('creates a queue', () => {
        expect(queue.next.value).toBe('queue it');
    });
    test('peek() returns the first node', () => {
        expect(queue.peek().value).toBe('queue it');
    });
    test('addValue(value) adds a node to the end of the queue', () => {
        queue.addValue(3);
        expect(queue.peek().value).toBe('queue it');
    });
    test('isEmpty() returns the correct boolean', () => {
        expect(queue.isEmpty()).toBe(false);
        const emptyQueue = new Queue();
        expect(emptyQueue.isEmpty()).toBe(true);
    });
    test('shift() removes and returns the first node', () => {
        queue.addValue(42);
        expect(queue.shift().value).toBe('queue it');
        expect(queue.shift().value).toBe(42);
    });
});

describe('SetOfStacks', () => {
    let setOfStacks;
    beforeEach(() => {
        setOfStacks = new SetOfStacks(3);
        setOfStacks.pushValue('SoS');
    });
    test('push() creates a new stack when it exceeds the maxStackSize', () => {
        const firstStack = setOfStacks.topStack;
        expect(setOfStacks.stackHeight).toBe(1);
        setOfStacks.pushValue('earth')
        setOfStacks.pushValue('wind')
        expect(setOfStacks.stackHeight).toBe(3);
        setOfStacks.pushValue('fire')
        expect(setOfStacks.stackHeight).toBe(1);
        expect(setOfStacks.topStack).not.toBe(firstStack);
    });
    test('pop() will pop from the next stack if the topStack is empty', () => {
        setOfStacks.pushValue('earth')
        setOfStacks.pushValue('wind')
        setOfStacks.pushValue('fire')
        setOfStacks.pushValue('water')
        expect(setOfStacks.pop().value).toBe('water');
        expect(setOfStacks.pop().value).toBe('fire');
        expect(setOfStacks.pop().value).toBe('wind');
        expect(setOfStacks.pop().value).toBe('earth');
    });
});
