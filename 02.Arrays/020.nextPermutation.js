// Given an array of integers, re-arrange the nos of the given array
// into the lexicographically next greater permutation of nos.
// If such an arrangement is not possible, it must re-arrange
// to the lowest possible order (sorted in asc order)

function nextPermutation(nums) {
    if (nums.length === 0) return;
    if (nums.length === 1) return nums;

    let leftHandSwap;

    // iterate from second last to start
    // find the 1st index at which the no. is 
    // less than the prev (right side) no.
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            leftHandSwap = i;
            break;
        }
    }

    // iterate from last to start
    // swap the no. at leftHandSwap index
    // with the 1sst index at which the no. is
    // greater than no. at leftHandSwap position

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[leftHandSwap]) {
            [nums[i], nums[leftHandSwap]] = [nums[leftHandSwap], nums[i]];

            let chopped = nums.splice(leftHandSwap + 1); // remove items after leftHandSwap
            chopped.sort((a, b) => a - b); // sort nums after leftHandSwap position
            nums.push(...chopped); // insert sorted nums back 
            return nums;
        }
    }

    // no swap done, no re-arrangement possible
    return nums.sort((a, b) => a - b);
}