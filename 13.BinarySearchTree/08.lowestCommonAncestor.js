// Lowest common ancestor of a BinarySearchTree
// This is defined as node between 2 nodes p & q as the 
// lowest node in tree that has both p and q as descendents
// (where we allow a node to be descendent of itself)

// p = 3 ; q = 5
//       6
//     /   \
//    2     8
//   / \   / \
//  0   4 7   9
//     / \
//    3   5
// return 4

function lowestCommonAncestor(root, p, q) {
    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    else if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
    else return root;
}