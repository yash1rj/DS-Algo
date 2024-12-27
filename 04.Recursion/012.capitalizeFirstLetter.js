function capitalizeFirstLetter(strArr) {
    if (strArr.length === 0) return strArr;
    return [strArr[0][0].toUpperCase() + strArr[0].slice(1)].concat(capitalizeFirstLetter(strArr.slice(1)));
}