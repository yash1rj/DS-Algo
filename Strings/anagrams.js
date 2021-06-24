// return true if 2ns string is anagram of 1st string

const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    let str1freq = {};

    for(let char of str1) {
        str1freq[char] = (str1freq[char] || 0) + 1;
    }

    // let str2freq = {};
    // for(let char of str2) {
    //     str2freq[char] = (str2freq[char] || 0) + 1;
    // }

    // for(let key in str1freq) {
    //     if(!(key in str2freq)) return false;

    //     if(str1freq[key] !== str2freq[key]) return false;
    // }

    for(let i=0; i<str2.length; i++) {
        let letter = str2[i];
        if(!str1freq[letter]) return false;
        else {
            str1freq[letter] -= 1;
        }
    }

    return true;
};

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("tar", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));