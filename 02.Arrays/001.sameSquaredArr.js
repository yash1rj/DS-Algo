// accept 2 array return true if every element in arr1 has corresponding value squared in arr2
// order doesnt matters but frequency does

// isSame([1,2,3], [4,1,9]) -> true
// isSame([1,2,3], [1,9]) -> false
// isSame([1,2,1], [4,1,4]) -> false

// NAIVE APPROACH
// one approach could be to sort one of the arrays and map it to the squared values
// and compare each element -> O(n log n + n)

// another approach could be to iterate over one array 
// and fine index of squared value in the other array
// remove the element in second array if element found, else return false - O(n^2)

const isSame1 = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    arr1 = arr1.sort((a, b) => a - b).map(elem => elem * elem);
    arr2.sort((a, b) => a - b);

    let res = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            res = false;
        }
    }

    return res;
};


// Using frequency counter -> O(n)
const isSame2 = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let arr1freq = {};
    let arr2freq = {};

    for (let elem of arr1) {
        arr1freq[elem] = (arr1freq[elem] || 0) + 1;
    }

    for (let elem of arr2) {
        arr2freq[elem] = (arr2freq[elem] || 0) + 1;
    }

    for (let key in arr1freq) {
        if (!(key ** 2 in arr2freq)) {
            return false;
        }
        if (arr2freq[key ** 2] !== arr1freq[key]) {
            return false;
        }
    }
    return true;
};

console.log(isSame2([1, 2, 3], [4, 1, 9]));
console.log(isSame2([1, 2, 3], [1, 9]));
console.log(isSame2([1, 2, 1], [4, 4, 1]));
console.log(isSame2([1, 2, 3, 2], [9, 4, 4, 1]));