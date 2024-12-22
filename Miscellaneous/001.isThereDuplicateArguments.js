// WAF which accepts n number of arguments 
// and return true if there are duplicates in the arguments else return false

// Using frequency counter
function isThereDuplicateArguments(...args) {
    let freqCntr = {};

    for (const item of args) {
        if (freqCntr[item]) return true;
        else freqCntr[item] = true;
    }
    return false;
}

console.log(isThereDuplicateArguments(1, 2, 3, 4, 1));