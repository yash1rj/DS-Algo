function validParanthesis(str) {
    const stack = [];
    const params = `() {} []`;

    let i = 0;
    while (i < str.length) {
        stack.push(str[i]);
        i++;

        let open = stack[stack.length - 2];
        let closed = stack[stack.length - 1];
        console.log(open, closed);

        let combo = open + closed;
        if (params.includes(combo)) {
            stack.pop();
            stack.pop();
        }
    }

    return stack.length === 0;
}

console.log(validParanthesis('({})[]'));

function validParanthesis2(str) {
    if (str.length % 2 !== 0) return false;
    const paranthesisMap = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    const stack = [];
    stack.push(str[0]);

    for (let i = 0; i < str.length; i++) {
        const lastElem = stack[stack.length - 1];

        if (paranthesisMap[lastElem] === str[i]) stack.pop();
        else stack.push(str[i]);
    }

    return stack.length === 0;
}