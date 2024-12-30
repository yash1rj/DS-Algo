function groupAnagrams(strArr) {
    let grouped = {};

    for (let i = 0; i < strArr.length; i++) {
        const word = strArr[i];
        const key = word.split("").sort().join("");

        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(word);
    }

    return Object.values(grouped);
}

console.table(groupAnagrams(['eat', 'tea', 'ate', 'nat', 'bat', 'tan']));
// o/p : [['eat', 'tea', 'ate'], ['nat', 'tan'], ['bat']]