function stringifyNumInNestedObj(obj) {
    let res = {};
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            res[key] = obje[key].toString();
        } else if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            res[key] = stringifyNumInNestedObj(obj[key]);
        } else {
            res[key] = obj[key];
        }
    }
    return res;
}