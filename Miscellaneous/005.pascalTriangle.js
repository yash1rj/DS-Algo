// Pascal triangle -> each number is sum of 2 nos. direcftly above it
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1
// Return nth row and element at r X c

function pascalTriangle(N, r = 1, c = 1) {
    let triangle = [];
    for (let i = 0; i < N; i++) {
        let level = [1];
        for (let j = 1; j < i + 1; j++) {
            if (j === i) level.push(1);
            else level.push(triangle[i - 1][j] + triangle[i - 1][j - 1]);
        }
        triangle.push(level);
    }
    return {
        triangle,
        elem: triangle[r - 1][c - 1],
    }
}

console.log(pascalTriangle(5));