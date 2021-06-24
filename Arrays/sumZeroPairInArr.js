// return the 1st pair with sum = 0 in a sorted input array
// return 0/undefined if such pair not found


// NAIVE APPROACH
// const sumZero = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if ((arr[i] + arr[j]) === 0) return [arr[i], arr[j]];
//         }
//     }
//     return 0;
// };

// MULTIPLE  POINTERS
const sumZero = (arr) => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let sum = arr[start] + arr[end];

        if (sum === 0) return [arr[start], arr[end]];
        else if (sum > 0) end--;
        else start++;
    }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));