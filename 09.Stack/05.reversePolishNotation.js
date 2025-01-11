// Reverse Polish Notation
// the 2 operands before the special character are taken 
// and the operation denoted by special character is performed
// then the 2 operands and operation symbol is replaced by answer obtained above

// [2, 1, +, 3, *]
// 2 and 1 comes before +, so 2+1 = 3
// now the result of above and 3 comes before *, so 3*3 = 9, thats the final result


// [4, 13, 5, /, +]
// 13 and 5 comes before /, so 13/5 = 2
// the result of above and 4 comes before +, so 4+2 = 6, final answer

function evalRPN(tokens) {
    const stack = [];

    const operators = {
        '+': (n1, n2) => n1 + n2,
        '-': (n1, n2) => n1 - n2,
        '*': (n1, n2) => n1 * n2,
        '/': (n1, n2) => Math.trunc(n1 / n2),
    };

    for (const token of tokens) {
        if (operators[token]) {
            let n2 = stack.pop();
            let n1 = stack.pop();

            stack.push(operators[token](n1, n2));
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack.pop();
}

console.log(evalRPN([4, 13, 5, '/', '+']));