`
*** PSEUDOCODE ***
    - The fn accepts an array and a value
    - Loop through array and check if current item is same as value
    - if match found return index
    - if loop ends and no match found return -1  
***
`
// O(n)
const linearSearch = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) return i;
    }
    return -1;
};