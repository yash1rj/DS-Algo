`
***
    - Radix sort is a special algorithm that works on list of numbers
    - It never makes comparisons between elements
    - It exploits the fact that info about size of a no. is encoded in no. of digits
    - More digits means a bigger number

    - We will need a few helper methods
        - getDigit(num, place) -> returns the digit in number at the given place values
        - digitCount(num) -> returns the no. of digits in num
        - mostDigits(numArr) -> returns the no. of digits in the largest nos. in the list


*** PSEUDOCODE [Radix Sort] ***
    - Define a fn that accepts list of numbers
    - Figure out how many digits the largest no. has
    - Loop from k=0 up to this largest no. of digits
    - For each iteration of the loop :
        - Create buckets for each digit(0to9)
        - Place each no. in the corresponding bucket based on its kth digit
    - Replace our existing array with values in our buckets, starting with 0 and going upto 9
    - Return list at the end
`

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// O(nk) ; n -> length of array, k -> no. of digits(avg)
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {
        // create array of 10 empty array
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([12, 24, 355, 743, 243, 2, 42]));
console.log(radixSort([5, 2, 1, 8, 4, 7, 6, 3]));
