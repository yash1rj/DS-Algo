// input is sorted arr, return the number of unique elements in that array

// O(n) solution
// const uniqueVals = (arr) => {
//     let arrFreq = {};
    
//     for(let val of arr) {
//         if(!arrFreq[val]) arrFreq[val] = 1;
//     }

//     return Object.keys(arrFreq).length;
// };


// Two pointer method
const uniqueVals = (arr) => {
    if(arr.length === 0) return 0;

    let i = 0;
    let copyArr = [...arr];
    for(let j=1; j<arr.length; j++) {
        if(copyArr[i] !== copyArr[j]) {
            i++;
            copyArr[i] = copyArr[j];
        }
    }

    return i+1;
};

console.log(uniqueVals([1,1,1,1,1,1,2]));
console.log(uniqueVals([1,2,3,4,4,6,7,13]));
console.log(uniqueVals([]));
console.log(uniqueVals([-2,-1,-1,0,5]));