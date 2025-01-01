`
***
    - A sorting algorithm where the largest values bubbles to the top


*** PSEUDOCODE ***
    - Start looping from with a varible i at the end of the array towards the beginning
    - Start an inner loop with variable j from beginning until i-1
    - if arr[j] > arr[j+1] swap those 2 values
    - return the sorted array
`

// O(n^2)
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}


// TC : O(n^2)
// for nearly sorted data -> O(n)
function bubbleSortWithOptimization(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([12, 24, 355, 743, 243, 2, 42]));
console.log(bubbleSortWithOptimization([12, 24, 355, 743, 243, 2, 42]));