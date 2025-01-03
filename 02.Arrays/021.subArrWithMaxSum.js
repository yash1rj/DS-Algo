// A subarray with sum < 0 will always reduce our answer so discard that
// Kadane's algorithm

// O(n)
function subArrWithMaxSum(arr) {
    let n = arr.length;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let tempSum = 0;

    let start = 0;
    let sIdx = -1;
    let eIdx = -1;

    for (let i = 0; i < n; i++) {
        if (tempSum === 0) start = i;

        tempSum += arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
            sIdx = start;
            eIdx = i;
        }
        if (tempSum < 0) tempSum = 0;
    }

    return {
        maxSum,
        subArr: arr.slice(sIdx, eIdx + 1),
    }
}