class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }


    // *** PSEUDOCODE for Inserting a node ***
    // (recursively or iteratively)

    // - Create a new node using the value passed down to the fn
    // - Starting at the root
    //     - Check if there is a root. If not, the root now becomes the new node.
    //     - If there is a root, check if value of new node is > or < than value of root

    //         - If it's > :
    //             - Check to see if there is a node to the right
    //             - If there is, move to that node and repeat these steps.
    //             - If not, add node as right property

    //         - If it's < :
    //             - Check to see if there is a node to the left
    //             - If there is, move to that node and repeat these steps.
    //             - If not, add node as left property

    //         - If it's = :
    //             - Return undefined

    // - Return BST

    // O(log(n))
    insert(val) {
        let newNode = new Node(val);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (true) {
            if (val === current.value) return undefined;
            if (val < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }


    // *** PSEUDOCODE for Finding a node ***
    // (recursively or iteratively)

    // - Starting at the root
    //     - Check if there is a root. If not, stop searching.
    //     - If there is a root, check value, if found stop searching
    //     - If value not found, check if value is > or < than root value

    //         - If it's > :
    //             - Check to see if there is a node to the right
    //             - If not, we're done searching
    //             - Else move to that node and repeat steps.

    //         - If it's < :
    //             - Check to see if there is a node to the left
    //             - If not, we're done searching
    //             - Else move to that node and repeat steps.

    // - Return false / found node accordingly

    // O(log(n))
    find(val) {
        if (this.root === null) return false;

        let current = this.root;
        let found = false;

        while (current && !found) {
            if (val === current.value) found = true;
            if (val < current.value) current = current.left;
            else current = current.right;
        }

        if (!found) return false;
        return current;
    }
}