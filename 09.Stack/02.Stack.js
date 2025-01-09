class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    // LIFO
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // *** PSEUDOCODE for Push ***

    // - Create a new node using the value passed down to the fn
    // - If no nodes, set first and last to new node
    // - Else, store first value, make new value as first
    // - and point its next to the stored value
    // - increment size by 1

    // O(1) : pushing at start
    push(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }

        return ++this.size;
    }


    // *** PSEUDOCODE for Pop ***

    // - If no nodes, return null
    // - Store first property in temp variable
    // - If there is only 1 node, set first and last to null
    // - If > 1 node, set first to be next of current first
    // - decrement size by 1 and return the removed node's value

    // O(1) : popping from start
    pop() {
        if (!this.first) return null;

        let popped = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }

        this.size--;
        return popped.val;
    }
}