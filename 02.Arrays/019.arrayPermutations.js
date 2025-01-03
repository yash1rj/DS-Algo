function permuteArr(nums) {
    let result = [];
    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums];

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        let rem = nums.slice(0, i).concat(nums.slice(i + 1)); // array omitting current element
        const remNumsPermuted = permuteArr(rem);

        for (let j = 0; j < remNumsPermuted.length; j++) {
            const premutedArr = [curr].concat(remNumsPermuted[j]);
            result.push(premutedArr);
        }
    }

    return result;
}

console.log(permuteArr([1, 2, 3, 4,]));