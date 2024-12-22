// return max sum of n consecutive elements in arr

// Naive solution
// O(n^2)
const maxSubarrSum1 = (arr, n) => {
    if (arr.length < n) return null;

    let result = -Infinity;
    // loop till last pair of n consecutive elements
    for (let i = 0; i <= arr.length - n; i++) {
        let smallRes = 0;
        for (let j = i; j < i + n; j++) {
            smallRes += arr[j];
        }

        result = Math.max(result, smallRes);
    }

    return result;
}

// O(n) SLIDING WINDOW PATTERN
// Example : maxSubarrSum1([1,2,5,2,8,1,5], 3)
// sum of 1st 3 consecutive elements = 8, maxSum and tempSum also = 8
// then start iterating from 4th element (element at n position), 
// add it the tempsum and subtract the 1st element (element at i-n position)
// slide the window over the remaining array, 
// compare tempSum and maxSum and keep the largest value

const maxSubarrSum = (arr, n) => {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < n) return null;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarrSum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarrSum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarrSum([4, 2, 1, 6], 1));
console.log(maxSubarrSum([4, 2, 1, 6, 2], 4));
console.log(maxSubarrSum([], 4));
console.log(maxSubarrSum([-1, -3, -6, -8], 4));