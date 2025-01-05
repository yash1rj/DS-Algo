// for i<j count pairs such that A[j]<A[i]

// [5, 4, 3, 2, 1] -> 10
// [1, 2, 3, 4, 5] -> 0
// [5, 3, 2, 1, 4] -> 7

function countInversions(arr) {
    let cnt = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) cnt++;
        }
    }

    return cnt;
}