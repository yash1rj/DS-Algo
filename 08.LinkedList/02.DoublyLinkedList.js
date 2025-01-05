`
***
    - Identical to SLL, except every node has another pointer to previous node.

    null <------ 4 <------> 6 <------> 8 <------> 2 <------> null
               <head>                           <tail>
                <--------------------------------->
                            LENGTH = 4
`

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.last = null;
        this.length = 0;
    }


    // *** PSEUDOCODE for Push ***
    // Pushing a new node to end of the list

    // - This fn should accept a value
    // - Create a new node using the value passed down to the fn
    // - If there is no head, set head and tail to newly created node
    // - Otherwise, set next property on tail to new node
    // - Set prev of nowNode to tail
    // - and set tail to newly created node
    // - increment the length by 1 and return SLL

    // O(1)
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }


    // *** PSEUDOCODE for Pop ***
    // Removing a node from DLL at the end of list

    // - If there are no nodes in the list, return undefined
    // - Store curren tail in a variable
    // - if length is 1, then assign head and tail to null
    // - Update tail to be prev Node of original tail
    // - Set updated tail's next to null and popped node prev to null
    // - Decrement length by 1 and return node removed

    // O(1)
    pop() {
        if (!this.head) return undefined;

        let popped = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null;
        }

        this.length--;
        return popped;
    }


    // *** PSEUDOCODE for Shift ***
    // Removing a node from DLL at the start of list

    // - If there are no nodes, return undefined
    // - Store the current head (old head) property in a variable
    // - If length is 1, set head and tail to null
    // - Update head to next of old head
    // - Set head's prev to null
    // - Set old head's next to null
    // - Decrement length by 1
    // - Return old head

    // O(1)
    shift() {
        if (!this.head) return undefined;

        let shifted = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shifted.next;
            this.head.prev = null;
            shifted.next = null;
        }

        this.length--;
        return shifted;
    }


    // *** PSEUDOCODE for Unshift ***
    // Pushing a new node to start of the list

    // - Create a new node using the value passed down to the fn
    // - If length is 0, set head and tail to be new node
    // - else set prev of head to newNode
    //     - set next of newNode to be head
    //     - update head to be newNode
    // - Increment the length and return DLL

    // O(1)
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }


    // *** PSEUDOCODE for Get ***
    // Get element at particular index

    // - Accept an index, if its not in range return null
    // - If index <= half of DLL length
    //      - Loop through list starting from head towards middle
    //      - Return node once found
    // - If index > half of DLL length
    //      - Loop through list starting from tail towards middle
    //      - Return node once found

    // O(n)
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;

        let cntr, current;

        if (idx <= this.length / 2) {
            cntr = 0;
            current = this.head;
            while (cntr !== idx) {
                current = current.next;
                cntr++;
            }
        } else {
            cntr = this.length - 1;
            current = this.tail;
            while (cntr !== idx) {
                current = current.prev;
                cntr--;
            }
        }

        return current;
    }


    // *** PSEUDOCODE for Set ***
    // Set value at particular index

    // - Accept value and an index
    // - Use get fn, to find specific node
    // - if node not found, return false
    // - if node found, set value of node and return true

    // O(n)
    set(val, idx) {
        let fetchedNode = this.get(idx);
        if (fetchedNode) {
            fetchedNode.val = val;
            return true;
        }
        return false;
    }


    // *** PSEUDOCODE for Insert ***
    // Insert new node at particular index

    // - If idx not in range, return false
    // - If inserting at last element, push the value and return true
    // - If inserting at start, unshift the value and return true
    // - Else get previous node of given idx
    // - Set next and prev on the correct nodes to link everything together
    // - Increment length by 1 and return true

    // O(1) if inserted and start or end
    // O(n) if inserted in middle
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === this.length) return !!this.push(val);
        if (idx === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let beforeNode = this.get(idx - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }


    // *** PSEUDOCODE for Remove ***
    // Removing node at particular index

    // - If idx not in range, return undefined
    // - If removing last element, pop
    // - If removing at start, shift
    // - Else get node at given idx
    // - Update prev and next of above node
    // - Set next and prev on found node to null 
    // - Decrement length by 1 and return the node removed

    // O(1) if removed from start or end
    // O(n) if removed from middle
    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift();

        let removedNode = this.get(idx - 1);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.prev = null;
        removedNode.next = null;

        this.length--;
        return removedNode;
    }


    // *** PSEUDOCODE for Reverse ***
    // Reversing a DLL

    // - If there is haed is null or head.next is null return it
    // - Create a variable node and initialize to head
    // - Swap head and tail
    // - Iterate through DLL
    //     - hold next of node in a variable
    //     - Set next on node to node's prev
    //     - Set prev of node to hold variable
    //     - Set node to node's prev
    // - Return DLL

    // O(n)
    reverse() {
        if (!this.head || !this.head.next) return this.head;

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        while (node) {
            let hold = node.next;
            node.next = node.prev;
            node.prev = hold;
            node = node.prev;
        }

        return this;
    }
}