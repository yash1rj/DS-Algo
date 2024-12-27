// Search smaller string in a longer string

`
*** PSEUDOCODE ***
    - Loop over the longer string 
    - Loop over the pattern / smaller string
    - if chars dont match, break out of inner loop
    - if chars match, keep going
    - if we complete inner loop and find a match, increment count of matches
    - Once outer loop ends, return matchCnt
***
`

function naiveStrSearch(str, pattern) {
    let matchCnt = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[i] !== str[i + j]) break;
            if (j === pattern.length - 1) matchCnt++;
        }
    }
    return matchCnt;
}