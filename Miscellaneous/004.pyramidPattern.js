//     *
//    ***
//   *****
//  *******
// *********

function pyramid(n) {
    const mid = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';
        for (let col = 0; col < n + mid; col++) {
            if (mid - row <= col && mid + row >= col) level += '*';
            else level += ' ';
        }
        console.log(level);
    }
}

pyramid(4);

// JS way
function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        // Print spaces before stars
        let spaces = ' '.repeat(rows - i);
        // Print stars
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

printPyramid(4);

function pyramidRecursive(n, row = 0, level = '') {
    if (n === row) return;
    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramidRecursive(n, row + 1);
    }
    const mid = Math.floor((2 * n - 1) / 2);
    let add;
    if (mid - row <= level.length && mid + row >= level.length) add = '*';
    else add = ' ';
    pyramidRecursive(n, row, level + add);
}

pyramidRecursive(4);