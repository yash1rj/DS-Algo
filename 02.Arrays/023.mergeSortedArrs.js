// One way is to use same algorithm in MergeSort
// TC : O(n+m)

// Another way
// Try to move the smaller elements in 1st array
// swap bigger elements of 1st array with smaller elements of 2nd array
// TC : O(min(n,m) + n log(n) + m log(m))
function mergeSortedArrs(sa1, sa2) {
    let n = sa1.length;
    let m = sa2.length;

    let left = n - 1;
    let right = 0;

    while (left >= 0 && right <= m) {
        if (sa1[left] > sa2[right]) {
            [sa1[left], sa2[right]] = [sa2[right], sa1[left]];
            left--;
            right++;
        } else break;
    }

    sa1.sort((a, b) => a - b);
    sa2.sort((a, b) => a - b);

    return sa1.concat(sa2);
}