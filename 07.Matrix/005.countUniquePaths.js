// Given a matrix mXn, count paths from left-top to right-bottom of the matrix
// with the constraints that from each cell we can either only move to the 
// rightward or downward direction


// using recursion
// count paths by adding path by moving right as well as moving down
function countUniquePaths(m, n) {
    function countPaths(i, j, m, n) {
        if (i === m - 1 && j === n - 1) return 1;

        if (i > m || j >= n) return 0;
        else return countPaths(i + 1, j, m, n) + countPaths(i, j + 1, m, n);
    }

    return countPaths(0, 0, m, n);
}

// To optimize we can use DP to save overlapping subproblems
// instead of traversing all possible paths
// whenever we get a result, we'll store in a matrix for future use
// and can directly use that value instead of recompiling

function countUniquePaths2(m, n) {
    function countPaths(i, j, m, n, dp) {
        if (i === m - 1 && j === n - 1) return 1;

        if (i >= m || j >= n) return 0;
        if (dp[i][j] !== -1) return dp[i][j];
        else {
            dp[i][j] = countPaths(i + 1, j, m, n, dp) + countPaths(i, j + 1, m, n, dp);
            return dp[i][j];
        }
    }

    let dp = Array.from(Array(m), () => Array.from(Array(n).fill(-1)));

    let totalPaths = countPaths(0, 0, m, n, dp);
    if (m === 1 && n === 1) return totalPaths;
    return dp[0][0];
}