// Given a value n, return a matrix of n X n with values starting from 1 to n*n
// the values should be in clockwise order

// matrix(3) -> 
// [[1,2,3],
// [8,9,4],
// [7,6,5]]

function createMatrix(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push([]);
    }
    let cntr = 1;
    let sCol = 0;
    let eCol = n - 1;
    let sRow = 0;
    let eRow = n - 1;

    while (sCol <= eCol && sRow <= eRow) {
        for (let i = sCol; i <= eCol; i++) { // top
            res[sRow][i] = cntr;
            cntr++;
        }
        sRow++;
        for (let i = sRow; i <= eRow; i++) { // right
            res[i][eCol] = cntr;
            cntr++;
        }
        eCol--;
        for (let i = eCol; i >= sCol; i--) { // bottom
            res[eRow][i] = cntr;
            cntr++;
        }
        eRow--;
        for (let i = eRow; i >= sRow; i--) { // left
            res[i][sCol] = cntr;
            cntr++;
        }
        sCol++;
    }
    return res;
}

console.log(createMatrix(3));