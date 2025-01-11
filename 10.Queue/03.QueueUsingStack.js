// we will have to use 2 stacks to create a queue
// first stack will be push stack
// second will be pop stack
// |  3  |       |  1  | 
// |  2  |       |  2  | 
// |  1  |       |  3  | 
// -------       -------
// pushStack     popStack

class QueueUsingStack {
    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }

    push(val) {
        this.pushStack.push(val);
    }

    pop() {
        if (!this.popStack.length) {
            while (this.pushStack.length) {
                this.popStack.push(this.pushStack.pop());
            }
        }
        return this.popStack.pop();
    }

    peek() {
        if (!this.popStack.length) {
            while (this.pushStack.length) {
                this.popStack.push(this.pushStack.pop());
            }
        }
        return this.popStack[this.popStack.length - 1];
    }

    empty() {
        return !this.pushStack.length && !this.popStack.length;
    }
}