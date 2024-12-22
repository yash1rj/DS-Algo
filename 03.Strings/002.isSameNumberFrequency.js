// return true if two +ve nos. have same frequency of digits


// Using frequency counters -> O(n)
const isSameNumberFrequency = (num1, num2) => {
    const str1 = String(num1);
    const str2 = String(num2);
    if (str1.length !== str2.length) return false;

    let str1freq = {};

    for (let char of str1) {
        str1freq[char] = (str1freq[char] || 0) + 1;
    }

    let str2freq = {};
    for (let char of str2) {
        str2freq[char] = (str2freq[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!(str1freq[char] && str1freq[char] === str2freq[char])) return false;
    }

    return true;
};

console.log(isSameNumberFrequency(182, 281));
console.log(isSameNumberFrequency(34, 144));