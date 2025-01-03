// Rotate matrix clockwise 90 degree
// Transpose the matrix and reverse the row

function rotateMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length / 2; j++) {
            [matrix[i][j], matrix[i][matrix[0].length - 1 - j]] = [matrix[i][matrix[0].length - 1 - j], matrix[i][j]]
        }
    }

    return matrix;
}