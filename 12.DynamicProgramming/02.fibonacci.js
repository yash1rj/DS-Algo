// recursion
function fib1(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// memoization
function fib2(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;

    let res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return res;
}

// tabualtion
function fib(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}