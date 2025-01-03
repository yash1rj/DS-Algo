// [[1, 3], [2, 6], [8, 10], [15, 18]] -> [[1, 6], [8, 10], [15, 18]]


// O(n^2)
function mergeOverlappingInterval1(arr) {
    const n = arr.length;
    arr.sort((a, b) => a[0] - b[0]);
    const res = [];

    for (let i = 0; i < n; i++) {
        let start = arr[i][0];
        let end = arr[i][1];

        if (res.length && end <= res[res.length - 1][1]) continue;

        for (let j = i + 1; j < n; j++) {
            if (arr[j][0] <= end) {
                end = Math.max(arr[j][1], end);
            } else break;
        }

        res.push([start, end]);
    }

    return res;
}

// O(n + n log(n))
function mergeOverlappingInterval2(arr) {
    const n = arr.length;
    arr.sort((a, b) => a[0] - b[0]);
    const res = [arr[0]];

    for (let i = 1; i < n; i++) {
        let last = res[res.length - 1];
        let current = arr[i];

        if (current[0] <= last[1]) {
            last[1] = Math.max(current[1], last[1]);
        } else res.push(current);
    }

    return res;
}


console.table(mergeOverlappingInterval1([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.table(mergeOverlappingInterval2([[1, 3], [2, 6], [8, 10], [15, 18]]));