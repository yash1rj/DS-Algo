function capitalizeAllWords(strArr) {
    return strArr.length < 1 ? [] : [strArr[0].toUpperCase(), ...capitalizeAllWords(strArr.slice(1))];
}