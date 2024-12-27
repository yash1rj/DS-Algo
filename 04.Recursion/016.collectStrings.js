function collectStrings(obj) {
    let res = [];
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            res.push(obj[key]);
        } else if (obj[key] !== null && obj[key].constructor === 'object') {
            res.push(...collectStrings(obj[key]));
        }
    }
    return res;
}

// Using helper method
function collectStrings2(inputObj) {
    let res = [];
    function gatherStrings(obj) {
        for (const key in obj) {
            if (typeof obj[key] === 'string') {
                res.push(obj[key]);
            } else if (obj[key] !== null && obj[key].constructor === 'object') {
                gatherStrings(obj[key]);
            }
        }
    }
    gatherStrings(inputObj);
    return res;
}