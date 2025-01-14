// Given roots of 2 BST, check if both trees are same

function isSameTree(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;

    if (p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    return false;
}