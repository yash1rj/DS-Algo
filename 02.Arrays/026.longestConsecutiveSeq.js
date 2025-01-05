// longest consecutive sequence of nos. in an array

function longestConsecutiveSeq(arr) {
    let n = arr.length;
    if (n === 0) return 0;

    arr.sort((a, b) => a - b);

    let lastSmaller = -Infinity;
    let cnt = 0;
    let longest = 1;

    for (let i = 0; i < n; i++) {
        if (arr[i] - 1 === lastSmaller) {
            // current item is next in seq
            cnt += 1;
            lastSmaller = arr[i];
        } else if (arr[i] !== lastSmaller) {
            // current item is different from previous and not consecutive
            cnt = 1;
            lastSmaller = arr[i];
        }
        longest = Math.max(longest, cnt);
    }

    return longest;
}