`
***
    - It is a combination of 2 things : merging and sorting
    - Exploits the fact that array of 0 or 1 elements are always sorted
    - Works by decompressing an array into smaller arrays of 0 or 1 elements
    - then building up a newly sorted array
    - [8elemets] -> 2 [4elements] -> 4 [2elements] -> 8 [1element]
    - O(log n) decompositions
    - O(n) merge per step

    - In order to implement merge sort, 
    - its useful to 1st implement a fn. responsible for merging 2 sorted arrays
    - Given 2 arrays which are sorted, this helper fn. should create a new array which is also sorted
    - and consists of all the elements in the input
    - This fn. should run in O(n+m) time and space complexity 
    - and should not modify the params passed to it


*** PSEUDOCODE [Merging 2 sorted array] ***
    - Create empty array, take a look at the smallest values in each input array
    - While there are still values we havent looked
    - if value in 1st array is smaller, push it to result and move to next value in 1st array
    - else push 2nd array value in result and move to next value in 2nd array
    - once we exhaust one array, push all remaining in other array into result


*** PSEUDOCODE [Merge Sort] ***
    - Break up the arrya into halves until we have array that are empty or have 1 element
    - Once we have smaller arrays, merge those arrays with other sorted arrays
    - until we are back at full length of array
    - Once array is merged, return the merged sorted array
`

// O(n)
function merge(sortedArr1, sortedArr2) {
    let res = [];
    let i = 0;
    let j = 0;

    while (i < sortedArr1.length && j < sortedArr2.length) {
        if (sortedArr1[i] < sortedArr2[j]) {
            res.push(sortedArr1[i]);
            i++;
        } else {
            res.push(sortedArr2[j]);
            j++;
        }
    }

    while (i < sortedArr1.length) {
        res.push(sortedArr1[i]);
        i++;
    }
    while (j < sortedArr2.length) {
        res.push(sortedArr2[j]);
        j++;
    }

    return res;
}

// O(n log n)
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([12, 24, 355, 743, 243, 2, 42]));
