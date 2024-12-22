// iterative
const factorial1 = (n) => {
    let total = 1;
    for (let i = n; i > 1; i--) {
        total *= i;
    }
    return total;
}

// recursive
const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}