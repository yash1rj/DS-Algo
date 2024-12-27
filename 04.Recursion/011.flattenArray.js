function flattenArr1(arr) {
    if (arr[0] === undefined) return [];
    if (Array.isArray(arr[0])) return [...flattenArr1(arr[0]), ...flattenArr1(arr.slice(1))];
    return [arr[0], ...flattenArr1(arr.slice(1))];
}

function flattenArr2(arr) {
    let res = [];
    arr.forEach(item => {
        if (Array.isArray(item)) res.push(...flattenArr2(item));
        else res.push(item);
    });
    return res;
}

function flattenArr3(arr, res = []) {
    if (arr.length === 0) return res;
    if (Array.isArray(arr[0])) {
        flattenArr3(arr[0], res);
    } else {
        res.push(arr[0]);
    }
    flattenArr3(arr.slice(1), res);
    return res;
}