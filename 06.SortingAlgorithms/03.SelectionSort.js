`
***
    - Similar to bubble sort, but instead of 1st placing large values into sorted position
    - it places small values into sorted position


*** PSEUDOCODE ***
    - Store the 1st element as the smaller value
    - Compare above item to the next item in the array until we find a smaller no.
    - If a smaller no. is found, designate that smaller no. to the new "minimum"
    - and continue until the end of array
    - If the "minimum" is not the value (index) we initally began with, swap the 2 values
    - Repeat this with the next element until the array is sorted
`

// O(n^2)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) lowest = j;
        }
        if (i !== lowest) {
            [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
        }
    }
    return arr;
}

console.log(selectionSort([12, 24, 355, 743, 243, 2, 42]));
