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


    // *** PSEUDOCODE for Breadth First Search (BFS) ***

    // - Create a queue (can be an array) and a variable to store the value of nodes visited
    // - Place root node in the queue
    // - Loop as long as there is anything in the queue
    //     - Dequeue a node from queue and push the value of node into the variable that stores the node
    //     - If there is left property on the node that is dequeued - add it to the queue
    //     - If there is right property on the node that is dequeued - add it to the queue
    // - Return the variable that stores the value

    // ------> 10
    //        /  \
    // ----> 6 -> 15
    //     /  \    \
    // -> 3 -> 8 -> 20 
    // [10, 6, 15, 3, 8, 20]

    BFS() {
        let node = this.root,
            data = [],
            queue = [];

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }


    // *** PSEUDOCODE for Depth First Search (DFS) - PreOrder ***

    // - Create a variable to store the value of nodes visited
    // - Store the root of BST in a variable (current)
    // - Write a helper fn. which accepts a node
    //     - Push the value of node to the variable that stores value
    //     - If node has left property, call helper with left property
    //     - If node has right property, call helper with right property
    // - Invoke the helper fn with current/root node
    // - Return the array of values

    //  |       10
    //  |      /  \
    //  |     6   15
    //  |    / \    \
    //  V   3   8   20 
    //    [10, 6, 3, 8, 15, 20]

    DFSPreOrder() {
        let data = [];

        function traversePreOrder(node) {
            data.push(node.value);
            if (node.left) traversePreOrder(node.left);
            if (node.right) traversePreOrder(node.right);
        }

        traversePreOrder(this.root);
        return data;
    }


    // *** PSEUDOCODE for Depth First Search (DFS) - PostOrder ***

    // - The difference is :
    // - In PreOrder, we pushed data to list and then checked left and right of node
    // - In PostOrder, we will check left and right of node and then push the node to list

    //  |       10
    //  |      /  \
    //  |     6   15
    //  |    / \    \
    //  V   3   8   20 
    //    [3, 8, 6, 20, 15, 10]

    DFSPostOrder() {
        let data = [];

        function traversePostOrder(node) {
            if (node.left) traversePostOrder(node.left);
            if (node.right) traversePostOrder(node.right);
            data.push(node.value);
        }

        traversePostOrder(this.root);
        return data;
    }


    // *** PSEUDOCODE for Depth First Search (DFS) - InOrder ***

    // - The difference is :
    // - In PreOrder, we pushed data to list and then checked left and right of node
    // - In PostOrder, we will check left and right of node and then push the node to list
    // - In InOrder, we will check left and push the value/node to lsit and then right

    //  |       10
    //  |      /  \
    //  |     6   15
    //  |    / \    \
    //  V   3   8   20 
    //    [3, 6, 8, 10, 15, 20]

    DFSInOrder() {
        let data = [];

        function traverseInOrder(node) {
            if (node.left) traverseInOrder(node.left);
            data.push(node.value);
            if (node.right) traverseInOrder(node.right);
        }

        traverseInOrder(this.root);
        return data;
    }
}