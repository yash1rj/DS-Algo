// return max sum of n consecutive elements in arr

// O(n**2)
const maxSubarrSum = (arr, n) => {
    if (arr.length < n) return null;

    let result = -Infinity;
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
const maxSubarrSum = (arr, n) => {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < n) return null;

    for(let i=0; i<n; i++) {
        maxSum += arr[i];
    }
    
    tempSum = maxSum;

    for(i=n; i<arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i];
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