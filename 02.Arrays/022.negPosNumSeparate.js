let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
let n = arr.length;

// ******************************************************************
//quicksort
const rearrange1 = (arr, n) => {
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            if (i != j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            j++;
        }
    }
    console.log(arr);
};


// ******************************************************************
// 2-pointer approach
const rearrange2 = (arr, n) => {
    let l = 0;
    let r = n - 1;

    while (l <= r) {
        if (arr[l] < 0 && arr[r] < 0) l++;
        else if (arr[l] > 0 && arr[r] < 0) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        }
        else if (arr[l] > 0 && arr[r] >= 0) r--;
        else {
            l++;
            r--;
        }
    }

    console.log(arr);
};


// ******************************************************************
// insertion sort
const rearrange3 = (arr, n) => {
    let key, j;
    for (let i = 1; i < n; i++) {
        key = arr[i];

        // if current element is positive
        // do nothing
        if (key > 0)
            continue;

        /* if current element is negative,
        shift positive elements of arr[0..i-1],
        to one position to their right */
        j = i - 1;
        while (j >= 0 && arr[j] > 0) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        // Put negative element at its right position
        arr[j + 1] = key;
    }

    console.log(arr);
};

rearrange1(arr, n);
rearrange2(arr, n);
rearrange3(arr, n);