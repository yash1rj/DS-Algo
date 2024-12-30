// Find longest substring without repeating characters

`
*** PSEUDOCODE ***
    - Create an empty hashMap (key/val -> char/index)
    - Create start and maxLen variable, set both to 0 initially
    - Loop through input string
        - if current char is in hashMap and has index >= start, set start to char index found + 1
        - set key/value pair on hashMap to be current char/index respectively
        - if length of current window > maxLen, set maxLen to length of current window
***
`

// Time complexity : O(n)
// Space complexity : O(min(m,n)) ; where m is size of charset and n is size of string
function lengthOfLongestSubstr(str) {
    let start = 0;
    let maxLen = 0;
    let charMap = {};

    for (let i = 0; i < str.length; i++) {
        const endChar = str[i];
        if (charMap[endChar] >= start) {
            start = charMap[endChar] + 1;
        }
        charMap[endChar] = i;
        maxLen = Math.max(maxLen, i - start + 1);
    }

    return maxLen;
}