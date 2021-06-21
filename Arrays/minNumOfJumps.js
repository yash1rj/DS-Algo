// Given an array of N integers arr[] where each element represents 
// the max number of steps that can be made forward from that element. 
// Find the minimum number of jumps to reach the end of the array (starting from the first element). 
// If an element is 0, then you cannot move through that element.

const minJumps = (arr) => {
    let n = arr.length;

    if(n <= 1) {
        return 0;
    }

    if(arr[0] === 0) {
        return -1;
    }

    let maxReach = arr[0];
    let step = arr[0];
    let jump = 1;

    for(let i=1; i < n; i++) {
        if(i === n-1) {
            return jump;
        }

        maxReach = Math.max(maxReach, arr[i]+i);

        step -= 1;

        if(step === 0) {
            jump++;

            if(i >= maxReach) {
                return -1;
            }
    
            step = maxReach - i;
        }
    }

    return -1;
};

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));