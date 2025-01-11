class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    // FIFO
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // *** PSEUDOCODE for Enqueue ***

    // - Create a new node using the value passed down to the fn
    // - If no nodes, set first and last to new node
    // - Else, set newNode to next of last
    // - and point last to the added node
    // - increment size by 1

    // O(1) : pushing at end
    enqueue(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }


    // *** PSEUDOCODE for Dequeue ***

    // - If no nodes, return null
    // - Store first property as oldHead
    // - If there is only 1 node, set last to null
    // - Set first to be next of current first
    // - decrement size by 1 and return the oldHead node value

    // O(1) : popping from start
    dequeue() {
        if (!this.first) return null;

        let oldHead = this.first;
        if (this.size === 1) this.last = null;
        this.first = this.first.next;

        this.size--;
        return oldHead.val;
    }

    // This method returns the element at the front of the queue without removing it.
    peek() {
        if (!this.first) return null;
        return this.first.val;
    }

    empty() {
        return this.size === 0;
    }
}