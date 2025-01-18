// Given the root of a binary tree and an integer targetSum
// return true if the tree has a root-to-leaf path such that 
// adding up all the values along the path equals targetSum

// targetSum = 24
//      10*
//     /  \
//    6*   15
//   / \   / \
//  3  8* 4  20 
// return true

function hasPathSum(root, targetSum) {
    if (!root) return false;

    let hasPath = false;

    const dfs = (node, sum) => {
        if (node.left === null && node.right === null) {
            if (sum === node.val) {
                hasPath = true;
            }
            return;
        }
        if (node.left) dfs(node.left, sum - node.value);
        if (node.right) dfs(node.right, sum - node.value);
    }

    dfs(root, targetSum);

    return hasPath;
}