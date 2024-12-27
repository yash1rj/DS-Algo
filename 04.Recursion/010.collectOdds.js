function collectOdds(nums) {
    let result = [];

    function oddCollectionHelper(helperInput) {
        if (helperInput.length === 0) return;
        if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
        oddCollectionHelper(helperInput.slice(1));
    }

    oddCollectionHelper(nums);
    return result;
}