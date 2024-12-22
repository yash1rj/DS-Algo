// WAF which takes 2 strings and 
// checks whether the chars in 1st string is present in 2nd string in same order.

// Recursive solution -> O(n*m)
// Better to use multiple pointer pattern
const isSubsequence = (str1, str2) => {
    if (!str1) return true;
    if (!str2) return false;

    if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(2));
    return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'dbac')); // false