// Finds the k-th minimum and l-th maximum values in a given array.

const findKthMinAndLthMax = (arr, k, l) => {
  let sortedArr = [...arr].sort((a, b) => a - b);

  return {
    kMin: sortedArr[k],
    lMax: sortedArr[sortedArr.length - 1 - l]
  };
};

console.log(findKthMinAndLthMax([7, 10, 4, 3, 20, 15], 4, 4));