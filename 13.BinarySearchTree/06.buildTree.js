// Construct Binary tree from preOrder and InOrder traversal

//      3 
//     /  \
//    9     20
//          / \
//         7   25

// preOrder : [3, 9, 20, 7, 25]
// inOrder  : [9, 3, 7, 20, 25]

// Key Points:
// Preorder traversal: Root - Left - Right
// Inorder traversal: Left - Root - Right
// By utilizing the order of elements in these traversals, 
// we can uniquely determine the structure of the binary tree.

function buildTree(preOrder, inOrder) {
    // If either preorder or inorder is empty, 
    // it means we've reached the end of the tree, so return null.
    if (!preOrder.length || !inOrder.length) return null;

    // The first element in preorder is always the root of the current subtree.
    let root = new Node(preOrder[0]);

    // search root node in inOrder list
    let mid = inOrder.indexOf(root.value);

    // leftInorder: Elements in inorder to the left of the rootVal.
    // rightInorder: Elements in inorder to the right of the rootVal.
    // leftPreorder: Elements in preorder from the second element(after the root) up to(and including) the index of the root in inorder.
    // rightPreorder: Elements in preorder after the elements corresponding to the left subtree.

    // build root.left using elements in preorder 
    // from the second element (after the root) up to (and including) 
    // the index of the root in inorder and elements in inorder to the left of the rootVal.
    root.left = buildTree(preOrder.slice(1, mid + 1), inOrder.slice(0, mid));

    // build root.right using elements in preorder 
    // after the elements corresponding to the left subtree 
    // and elements in inorder to the right of the rootVal.
    root.right = buildTree(preOrder.slice(mid + 1), inOrder.slice(mid + 1));

    return root;
}