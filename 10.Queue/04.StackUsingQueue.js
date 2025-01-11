class StackUsingQueue {
    constructor() {
        this.queue = new Queue();
    }

    push(val) {
        let rotate = this.queue.size;
        this.queue.enqueue(val);

        while (rotate > 0) {
            this.queue.enqueue(this.queue.dequeue());
            rotate--;
        }
    }

    pop() {
        return this.queue.dequeue();
    }

    top() {
        // return first of queue
        return this.queue.peek();
    }

    empty() {
        // return true if queue size is 0
        return this.queue.empty();
    }
}