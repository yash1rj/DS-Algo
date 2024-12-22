// input is SORTED arr, return the number of unique elements in that array

// Using frequency counter -> O(n) solution
const uniqueVals1 = (arr) => {
    let arrFreq = {};

    for (let val of arr) {
        if (!arrFreq[val]) arrFreq[val] = 1;
    }

    return Object.keys(arrFreq).length;
};

// Another O(n) solution
const uniqueVals2 = (arr) => {
    if (arr.length === 0) return 0;

    let i = 0;
    let copyArr = [...arr];

    for (let j = 1; j < arr.length; j++) {
        if (copyArr[i] !== copyArr[j]) {
            i++;
            copyArr[i] = copyArr[j];
        }
    }

    return i + 1;
};


// Multiple pointer method (Similar to previous solution) -> O(n)
const uniqueVals = (arr) => {
    if (arr.length === 0) return 0;

    let ptr1 = 0;
    let ptr2 = 1;
    let cnt = 1;

    while (ptr2 < arr.length) {
        if (arr[ptr1] !== arr[ptr2]) {
            cnt++;
            ptr1 = ptr2;
        }
        ptr2++;
    }

    return cnt;
};

console.log(uniqueVals([1, 1, 1, 1, 1, 1, 2]));
console.log(uniqueVals([1, 2, 3, 4, 4, 6, 7, 13]));
console.log(uniqueVals([]));
console.log(uniqueVals([-2, -1, -1, 0, 5]));