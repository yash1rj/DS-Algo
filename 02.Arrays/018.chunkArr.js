function chunkArr(arr, size) {
    let chunked = [];

    for (let i = 0; i < arr.length; i++) {
        const lastElem = chunked[chunked.length - 1];
        if (!lastElem || lastElem.length === size) {
            chunked.push([arr[i]]);
        } else {
            lastElem.push(arr[i]);
        }
    }

    return chunked;
}

function chunkArr2(arr, size) {
    let chunked = [];
    let start = 0;

    while (start < arr.length) {
        chunked.push(arr.slice(start, start + size));
        start += size;
    }

    return chunked;
}
