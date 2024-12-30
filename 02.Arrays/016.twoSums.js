function twoSums(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.hasOwnProperty(complement)) return [numMap[complement], i];
        numMap[nums[i]] = i;
    }
    return false;
}