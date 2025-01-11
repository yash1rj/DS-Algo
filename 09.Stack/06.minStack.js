// Create a Min Stack
// push, pop, top, getMin -> O(1)

// The Min Stack data structure typically uses two stacks:   
// Main Stack: Stores all the elements that are pushed onto the stack.
// Min Stack: Stores the minimum element encountered so far at each point.

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        if (!this.stack.length) {
            this.stack.push(val);
            this.minStack.push(val);
        } else {
            this.stack.push(val);
            // push smaller number : current or last item in main stack
            this.minStack.push(Math.min(this.stack[this.stack.length - 1], val));
        }
    }

    pop() {
        if (!this.stack.length) return null;
        this.minStack.pop();
        return this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}