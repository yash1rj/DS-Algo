`
***
    - Builds up the sort by gradually creating a larger left half which is always sorted


*** PSEUDOCODE ***
    - Start by picking the 2nd element in the array
    - Now compare the 2nd element with the one before it and swap if necessary
    - Continue to the next element and if it is in the incorrect order
    - iterate through the sorted portion (i.e. the left side)
    - to place the element in the correct place
    - repeat until the array is sorted
`

// O(n^2)
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

console.log(insertionSort([12, 24, 355, 743, 243, 2, 42]));
