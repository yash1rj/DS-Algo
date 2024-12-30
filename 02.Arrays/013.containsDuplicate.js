function containsDuplicate(arr) {
    let arrMap = {};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (arrMap[item]) return true;
        else arrMap[item] = true;
    }
    return false;
}