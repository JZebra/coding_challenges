import { Stack } from './stack';

describe('Stack', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
        stack.pushValue('stack it');
    })
    test('creates a stack', () => {
        expect(stack.top.value).toBe('stack it');
    });
    test('peek() returns the top node.value', () => {
        expect(stack.peek()).toBe('stack it');
    });
    test('pushValue(value) adds a node to the top of the stack', () => {
        stack.pushValue(3);
        expect(stack.peek()).toBe(3);
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
});
