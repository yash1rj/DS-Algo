// input is sorted array and a number, return the index of the number 

// Naive approch -> O(n)
const linearSearch = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) return i;
    }
    return -1;
};

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

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 6, 7, 9, 13], 6));
console.log(search([1, 2, 4, 5, 6], 3));