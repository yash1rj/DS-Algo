`
***
    - Binary search is a much faster form of search
    - Rather than eliminating one element at a time, we can eliminate half of the remaining elements at a time
    - It only works on sorted arrays


*** PSEUDOCODE ***
    - The fn accepts a sorted array and a value
    - Create left ptr at start of array and right ptr at end end of array
    - while left ptr is before right ptr
        - check middle element
        - if value found, return it
        - if value at middle is smaller, move left ptr to next of middle
        - if value at middle is larger, move right ptr to before of middle
    - if loop ends and no match found return -1  
`

// Divide and conquer -> O(log n)
const binarySearch = (arr, n) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((end + start) / 2);
        let currentElem = arr[middle];

        if (currentElem < n) start = middle + 1;
        else if (currentElem > n) end = middle - 1;
        else return middle;
    }

    return -1;
};

console.log(binarySearch([1, 2, 4, 5, 6], 3));
console.log(binarySearch([1, 2, 3, 4, 6], 4));