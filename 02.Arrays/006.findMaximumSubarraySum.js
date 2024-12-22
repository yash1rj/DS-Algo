//Given an integer array, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.   

const findMaximumSubarraySum = (nums) => {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // calculate max and temp sums at each index
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(findMaximumSubarraySum([1, 2, 3, -2, 5]));
console.log(findMaximumSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3]));