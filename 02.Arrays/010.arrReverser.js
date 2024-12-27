// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

// reverse whole array
const arrReverse = (arr) => {
    return [...arr].reverse();
};

console.log(arrReverse([1, 2, 3]));
console.log(arrReverse([4, 5, 1, 2]));


// reverse sequence of array from a given start and end index
const reverser = (arr, start, end) => {
    if (start >= end) return;

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    //console.log(temp, arr);

    reverser(arr, start + 1, end - 1);
}

const reverseArr = (arr) => {
    console.log(reverser(arr, 0, arr.length - 1))
};

console.log(reverseArr([1, 2, 3], 0, 3));
console.log(reverseArr([4, 5, 1, 2], 0, 4));