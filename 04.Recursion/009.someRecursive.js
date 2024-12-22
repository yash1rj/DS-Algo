// a recursive fn which accepts and array and a callback.
// The fn returns true if atleast a single value in the array 
// when passed to the callback return true
// otherwise it return false

function someRecursive(arr, callback) {
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([1, 2, 3, 4], val => val % 2 !== 0));
console.log(someRecursive([4, 6, 8], val => val > 10));