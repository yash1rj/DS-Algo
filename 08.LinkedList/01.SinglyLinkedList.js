`
***
    - A data structure that contains a head, tail and length property.
    - Linked lists consist of nodes, 
    - and each node has a value and a pointer to another node or null.
    - Linked list don't have indexes. So, random access is not allowed.

      (next)    (next)    (next)    (next)
    4 ------> 6 ------> 8 ------> 2 ------> null
    <head>                        <tail>
    <----------------------------->
            LENGTH = 4
`

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.tail = newNode;
        }
        this.length++;
        return this;
    }


    // *** PSEUDOCODE for Pop ***
    // Removing a node from SLL at the end of list

    // - If there are no nodes in the list, return undefined
    // - Loop through the list until you reach the tail
    // - Set the next property of 2nd last node to null
    // - Set tail to 2nd last node
    // - decrement length by 1
    // - if length is 0, then assign head and tail to null
    // - return node removed

    // O(n)
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }


    // *** PSEUDOCODE for Shift ***
    // Removing a node from SLL at the start of list

    // - If there are no nodes, return undefined
    // - Store the current head property in a variable
    // - Set head property to be current head's next
    // - Decrement length by 1
    // - Return value of node removed

    // O(1)
    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }


    // *** PSEUDOCODE for Unshift ***
    // Pushing a new node to start of the list

    // - Create a new node using the value passed down to the fn
    // - If there is no head, set head and tail to newly create node
    // - Otherwise, set next property on newNode to head
    // - and update the head to newNode
    // - increment the length by 1 and return SLL

    // O(1)
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }


    // *** PSEUDOCODE for Get ***
    // Get element at particular index

    // - Accept an index, if its not in range return null
    // - Loop through SLL till we reach index
    // - Return node at index

    // O(n)
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;

        let current = this.head;
        let cntr = 0;
        while (cntr !== idx) {
            current = current.next;
            cntr++;
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
    // - Update prev.next to newNode and newNode.next to node after given idx
    // - Increment length by 1 and return true

    // O(1) if inserted and start or end
    // O(n) if inserted in middle
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === this.length) return !!this.push(val);
        if (idx === 0) return !!this.unshift(val);

        let prevNode = this.get(idx - 1);
        let newNode = new Node(val);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }


    // *** PSEUDOCODE for Remove ***
    // Removing node at particular index

    // - If idx not in range, return undefined
    // - If removing last element, pop
    // - If removing at start, shift
    // - Else get previous node of given idx
    // - Update prev.next to next of next node
    // - Decrement length by 1 and return the node removed

    // O(1) if removed from start
    // O(n) if removed from middle or end
    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift();

        let prevNode = this.get(idx - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }


    // *** PSEUDOCODE for Reverse ***
    // Reversing a SLL

    // - Create a variable node and initialize to head
    // - Swap head and tail
    // - Create prev and next variable
    // - Iterate through SLL
    //     - Set next to be next of whatever node is
    //     - Set next on node to whatever prev is
    //     - Set prev to node variable
    //     - Set node to next variable
    // - Return SLL

    // O(n)
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}