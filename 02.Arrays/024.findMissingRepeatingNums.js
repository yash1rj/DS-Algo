// Given arr of N integers with values in the range [1,N].
// Each integer appears exactly once except 'A' which appears twice
// and 'B' which is missing
// Find missing and repeating

function findMissingRepeatingNums(arr) {
    const n = arr.length;
    let repeating = -1;
    let missing = -1;

    for (let i = 1; i <= n; i++) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            if (arr[j] === i) cnt++;
        }

        if (cnt === 2) repeating = i;
        else if (cnt === 0) missing = i;

        if (repeating !== -1 && missing !== -1) break;
    }

    return { repeating, missing };
}

function findMissingRepeatingNumsUsingHashing(arr) {
    const n = arr.length;

    const hash = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        hash[arr[i]]++;
    }

    let repeating = -1;
    let missing = -1;

    for (let i = 1; i <= n; i++) {
        if (hash[i] === 2) repeating = i;
        else if (hash[i] === 0) missing = i;

        if (repeating !== -1 && missing !== -1) break;
    }

    return { repeating, missing };
}