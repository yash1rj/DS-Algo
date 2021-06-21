const getMinDiff = (arr, k) => {
    let n = arr.length;

    if(n == 1) {
        return "Needs atleast two towers to compare."
    }

    let arrCopy = [...arr];
    arrCopy.sort((a,b) => a-b);

    let min = 0;
    let max = 0;
    let res = arrCopy[n-1] - arrCopy[0];

    for(let i=1; i<n; i++) {
        if(arrCopy[i] >= k) {
            max = Math.max(arrCopy[i-1] + k, arrCopy[n-1] - k);
            min = Math.min(arrCopy[i] - k, arrCopy[0] + k);

            res = Math.min(res, max - min);
        }
        else {
            continue;
        }
    }

    return res;
};

console.log(getMinDiff([1, 5, 8, 10], 2));
console.log(getMinDiff([3, 9, 12, 16, 20], 3));
console.log(getMinDiff([1, 5, 10], 6));