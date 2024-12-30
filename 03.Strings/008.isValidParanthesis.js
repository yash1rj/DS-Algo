// given str containing just the chars {,},(,),[,]
// input is valid if open brackets are closed by the same type of brackets and in correct order

function isValidParanthesis(str) {
    let stack = [];
    let pairsHashMap = {
        '{': '}',
        '(': ')',
        '[': ']'
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (pairsHashMap[char]) {
            stack.push(char);
        } else if (pairsHashMap[stack.pop()] !== char) {
            return false;
        }
    }

    return stack.length === 0;
}