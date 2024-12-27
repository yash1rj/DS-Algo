function longestPalindromicSubString(str) {
    let startIdx = 0;
    let maxlength = 1;

    function expandAroundMiddle(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            const currentPalindromeLen = right - left + 1;
            if (currentPalindromeLen > maxlength) {
                maxlength = currentPalindromeLen;
                startIdx = left;
            }
            left -= 1;
            right += 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        expandAroundMiddle(i - 1, i + 1);
        expandAroundMiddle(i, i + 1);
    }

    return str.slice(startIdx, startIdx + maxlength);
}

// Test cases
console.log(longestPalindromicSubString("babad")); // Output: "bab" or "aba"
console.log(longestPalindromicSubString("cbbd")); // Output: "bb"
console.log(longestPalindromicSubString("a")); // Output: "a"
console.log(longestPalindromicSubString("ac")); // Output: "a"
console.log(longestPalindromicSubString("aacabdkacaa")); // Output: "aca" 