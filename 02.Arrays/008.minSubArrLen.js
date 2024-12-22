// WAF which accepts an array of +ve integers and a +ve integer
// The fn should return the minimum length of a contiguous subarray
// of which the sum is >= integer passed to fn
// If there isn't one, return 0 instead.

// Naive solution -> O(n^2)
const minSubArrLen1 = (arr, n) => {
    for (const elem of arr) {
        if (elem > n) return 1;
    }

    let maxSum = 0;
    for (const elem of arr) {
        maxSum += elem;
    }
    if (maxSum < n) return 0;

    // sliding window technique as used for maxSubarrSum problem
    let cntr = 2;
    while (cntr <= arr.length) {
        let sum = 0;
        let temp = 0;
        for (let i = 0; i < cntr; i++) {
            sum += arr[i];
        }
        temp = sum;
        for (let i = cntr; i < arr.length; i++) {
            temp = temp - arr[i - cntr] + arr[i];
            sum = Math.max(temp, sum);
        }
        if (sum >= n) return cntr;
        cntr++;
    }
}

// Sliding window with optimizations -> O(n)
const minSubArrLen = (arr, target) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < arr.length) {
        if (total < target && end < arr.length) {
            total += arr[end];
            end++;
        } else if (total >= target) {
            minLen = Math.min(minLen, end - start);
            total -= arr[start];
            start++;
        } else break; // current total is less than required but we reached the end
    }

    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrLen([2, 3, 1, 2, 4, 3], 7)); // 2 as only 2 elems needed to have sum >= 7
console.log(minSubArrLen([2, 1, 6, 5, 4], 9)); // 2 as only 2 elems needed to have sum >= 9
console.log(minSubArrLen([1, 4, 16, 40, 4], 25)); // 1 as only 1 elem needed to have sum >= 25
console.log(minSubArrLen([1, 4, 16, 22], 120)); // 0 as even total sum is < 120
