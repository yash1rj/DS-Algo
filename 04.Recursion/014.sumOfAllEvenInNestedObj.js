function sumOfAllEvenInNestedObj(obj, sum = 0) {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            sum += sumOfAllEvenInNestedObj(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}

const obj = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
        },
    },
    random: 'foo',
    more: {
        stuff: 'bar',
        number: 42,
    },
};

const sum = sumOfAllEvenInNestedObj(obj);
console.log(sum); // Output: 50 