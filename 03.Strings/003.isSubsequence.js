// WAF which takes 2 strings and 
// checks whether the chars in 1st string is present in 2nd string in same order.

// Multiple pointer -> O(n+m)
const isSubsequence = (str1, str2) => {
    if (!str1) return true;

    let ptr1 = 0;
    let ptr2 = 0;

    while (ptr1 < str1.length && ptr2 < str2.length) {
        if (str1[ptr1] === str2[ptr2]) ptr1++;
        if (ptr1 === str1.length) return true;
        ptr2++;
    }

    return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'dbac')); // false