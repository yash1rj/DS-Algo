// Given a matrix if an element in the matrix is 0, then set its entire col and row to 0
// and then return the matrix

// Naive approach
// TC: O(n^3)
// SC: O(1)
function setMatrixZero(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    function setRows(matrix, m, col) {
        for (let i = 0; i < m; i++) {
            if (matrix[i][col] !== 0) {
                matrix[i][col] = -1;
            }
        }
    }

    function setCols(matrix, n, row) {
        for (let i = 0; i < n; i++) {
            if (matrix[row][i] !== 0) {
                matrix[row][i] = -1;
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                setRows(matrix, rows, j);
                setCols(matrix, cols, i);
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === -1) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

// To optimize the code, we ca use extra row and column array to keep track of 0 in the matrix

// TC : O(n^2)
// SC : O(2*n)
function setMatrixZeroBetter(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let eRow = new Array(rows).fill(0);
    let eCol = new Array(cols).fill(0);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                eRow[i] = -1;
                eCol[j] = -1;
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (eRow[i] === -1 || eCol[j] === -1) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

// Furthermore we can optimize the space complexity
// We can make use of first row and column of the matrix
// to keep track of 0 in the matrix along with and extra variable col0 
// for the matrix[0][0] overlapped position

function setMatrixZeroBest(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let col0 = 1;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;

                if (j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] !== 0) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    // use matrix 1st elem position to set rows
    if (matrix[0][0] === 0) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }

    // use col0 variable to set columns
    if (col0 === 0) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    return matrix;
}