const unionIntersection = (arr1, arr2) => {
    const union = [...new Set(arr1.concat(arr2))];
    console.log("Union: ", union);

    const intersection = [];

    // technique with distinct array
    // arr1.forEach(elem => {
    //     for(let i=0; i< arr2.length; i++){
    //         if(elem === arr2[i]) intersection.push(elem);
    //     }
    // }); 


    // multiple pointer technique
    let i = 0; j = 0;
    let a = arr1.sort((a, b) => a - b);
    let b = arr2.sort((a, b) => a - b);
    while (i < arr1.length && j < arr2.length) {
        if (a[i] > b[j]) j++;
        else if (a[i] < b[j]) i++;
        else {
            //both equal
            intersection.push(a[i]);
            i++;
            j++;
        }
    }
    console.log("Intersection: ", intersection);
};

unionIntersection([7, 1, 5, 2, 3, 6], [3, 8, 6, 20, 7]);
unionIntersection([1, 2, 2, 3, 4], [2, 2, 4, 6, 7, 8]);