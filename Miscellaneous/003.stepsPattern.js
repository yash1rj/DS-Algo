// #
// ##
// ###
// ####
// #####

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let col = 0; col < n; col++) {
            if (col <= row) stair += '#';
            else stair += ' ';
        }
        console.log(stair);
    }
}

steps(4);

function stepsRecursive(n, row = 0, stair = '') {
    if (n === row) return;
    if (n === stair.length) {
        console.log(stair);
        return stepsRecursive(n, row + 1);
    }
    const add = stair.length <= row ? '#' : ' ';
    stepsRecursive(n, row, stair + add);
}

stepsRecursive(4);