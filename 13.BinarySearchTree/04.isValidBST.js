function isValidBST(root) {
    // helper fn to check if all values in a subtree are within specified range
    function isValidSubTree(node, min, max) {
        if (!node) return true;

        if (
            (min !== null && node.value <= min) ||
            (max !== null && node.value >= max)
        ) return false;

        // for left subtree, values must be less than the current node's value
        // for right subtree, values must be greater than the current node's value
        return isValidSubTree(node.left, min, node.value) &&
            isValidSubTree(node.right, node.value, max);
    }

    return isValidSubTree(root, null, null);
}