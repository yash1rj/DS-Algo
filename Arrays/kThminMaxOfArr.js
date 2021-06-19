const kMinlMax = (arr, k, l) => {
    let uArr = [...arr];
    let arrLen = uArr.length;
    let sorted=uArr.sort((a,b) => a-b);

    return ({
      kMin: sorted[k], 
      kMax: sorted[arrLen-l]
    });
};

console.log(kMinlMax([7, 10, 4, 3, 20, 15], 4, 4));