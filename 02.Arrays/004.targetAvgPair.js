// WAF accepting sorted array of integers and a target avg, 
// determine if there is a pair of values in the array where the avg of pair equals the target avg.
// There may be more than one pair that matches the avg target.


// Multiple pointer -> O(n)
const targetAvgPair = (arr, targetAvg) => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let currentAvg = (arr[start] + arr[end]) / 2;
        if (targetAvg === currentAvg) return true;
        else if (targetAvg > currentAvg) start++;
        else end--;
    }

    return false;
}

console.log(targetAvgPair([1, 2, 3], 2.5)); // true
console.log(targetAvgPair([-1, 0, 3, 4, 5, 6], 4.1)); // false