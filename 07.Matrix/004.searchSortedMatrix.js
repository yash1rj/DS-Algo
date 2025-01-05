// In a matrix, rows are in ascending order.
// First element of a row is greater the last element of previous row.

// O(n+m)
function searchSortedMatrix1(matrix, val) {
    let n = matrix.length;
    let m = matrix[0].length;
    let rowToSearch = -1;

    if (matrix[0][0] > val) return false;

    // search the row first
    for (let i = 0; i < n; i++) {
        if (matrix[i][0] === val) return true;
        else if (matrix[i][0] > val) break;
        else if (matrix[i][0] < val && matrix[i][m - 1] >= val) {
            rowToSearch = i;
            break;
        }
    }

    if (rowToSearch >= 0) {
        for (let j = 0; j < m; j++) {
            if (matrix[rowToSearch][j] === val) return true;
        }
    }

    return false;
}

// using binary search on each row
// O(n*log m)
function searchSortedMatrix2(matrix, val) {
    const binarySearch = (arr, n) => {
        let start = 0;
        let end = arr.length - 1;

        while (start <= end) {
            let middle = Math.floor((end + start) / 2);
            let currentElem = arr[middle];

            if (currentElem < n) start = middle + 1;
            else if (currentElem > n) end = middle - 1;
            else return true;
        }

        return false;
    };

    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        if (matrix[i][0] <= val && matrix[i][m - 1] >= val) {
            return binarySearch(matrix[i], val);
        }
    }

    return false;
}

// To further optimize, we can convert 1D array index to the 
// corresponding cell of 2D matrix

// Iterate 0 to (n*m)-1
// Index 5 corresponds to cell(1,1) in a 4x4 matrix
// row = 5/4 = 1 (integer division)
// col = 5%4 = 1

// then use binary search

// O(log(n*m))
function searchSortedMatrix3(matrix, val) {
    let n = matrix.length;
    let m = matrix[0].length;

    let start = 0;
    let end = n * m - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        let row = Math.floor(mid / m);
        let col = mid % m;

        if (matrix[row][col] === val) return true;
        else if (matrix[row][col] > val) end = mid - 1;
        else start = mid + 1;
    }

    return false;
}