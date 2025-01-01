`
***
    - Like merge sort, exploits the fact that arrays of 0/1 elements are always sorted
    - Works by selecting one element (called "pivot")
    - and finding the index where the pivot should end up in the sorted array
    - once the pivot is positioned appropriately, 
    - quick sort can be applied on either side of the pivot

    - In order to implement quick sort, 
    - its useful to 1st implement a fn. responsible for 
    - arranging elements in an array on either side of pivot
    - Given an array, this helper fn. should designate an element as the pivot
    - It should then rearrange elements in the array so that 
    - all values less than the pivot are moved to the left and values greater are moved to right
    - The order of elements on either side of the pivot doesnt matter
    - The helper fn. should do this in place, i.e. shouldnt create new array
    - When complete, the helper should return the index of the pivot

    - The runtime of a quick sort depends on how the pivot is selected
    - Ideally, the pivot should be chosen so that its roughly the medium value in the data set
    - For simplicity, we'll choose the pivot to be the 1st element


*** PSEUDOCODE [pivot helper] ***
    - It will accept 3 arguments : an array, a start index and an end index
    - these can default to 0 and the array.length-1 respectively
    - Grab the pivot from the start of the array
    - Store the current pivot index in a variable, to keep track of where the pivot should end up
    - Loop through the array from start until end
        - if pivot > current element, increment pivot index variable
        - and then swap the current element with the element at the pivot index
    - Swap the starting element (pivot) with the pivot index
    - Return the pivot index

    - arr -> [5,2,1,8,4,7,6,3]
    - pivot(arr) -> 4
    - arr after mutation -> [2,1,4,3,5,8,7,6], [1,4,3,2,5,7,6,8], it can be different mutation also

*** PSEUDOCODE [Quick Sort] ***
    - Call the pivot helper on the array
    - Recursively call the pivot helper on the subarray to the left of the pivot index
    - and also to the right of the pivot helper
    - our base case occurs when we consider a subarray with < 2 elements
`

// O(n)
function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
        }
    }
    [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
    return swapIdx;
}

// O(n log n)
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

console.log(quickSort([12, 24, 355, 743, 243, 2, 42]));
console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]));
