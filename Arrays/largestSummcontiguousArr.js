const maxSubArraySum1 = (a) => {
    let max_so_far = a[0];
    let curr_max = a[0];

    for (let i = 1; i < a.length; i++) {
        curr_max = Math.max(a[i], curr_max + a[i]);
        max_so_far = Math.max(max_so_far, curr_max);
    }

    return max_so_far;
}

console.log(maxSubArraySum1([1, 2, 3, -2, 5]));
console.log(maxSubArraySum1([-2, -3, 4, -1, -2, 1, 5, -3]));