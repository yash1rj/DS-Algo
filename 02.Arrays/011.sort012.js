`
=== General idea is to throw all 0's at starting of array and throw all 2's at end of array ===

*** PSEUDOCODE ***
    - The fn accepts an array and its size
    - Create pointer to starting index as low, last index as high and mid index value same as low
    - Create temp pointer as well starting from 0
    - while mid is <=high
        - check if item at mid is 0, if yes swap item at low and mid, increment low and mid
        - else if mid item is 1, increment mid
        - else swap mid and high (found 2), decrement high
    - return sorted array
***
`

const sorter012 = (a, arr_size) => {
    let lo = 0;
    let hi = arr_size - 1;
    let mid = 0;
    let temp = 0;
    while (mid <= hi) {
        if (a[mid] == 0) {
            temp = a[lo];
            a[lo] = a[mid];
            a[mid] = temp;
            lo++;
            mid++;
        }
        else if (a[mid] == 1) {
            mid++;
        }
        else {
            temp = a[mid];
            a[mid] = a[hi];
            a[hi] = temp;
            hi--;
        }

    }
    return a;
}
let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log(sorter012(arr, arr.length));