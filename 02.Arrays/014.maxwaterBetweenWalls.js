function maxwaterBetweenWalls(walls) {
    let start = 0;
    let end = walls.length - 1;
    let maxWaterArea = 0;

    while (start < end) {
        const tempArea = Math.min(walls[start], walls[end]) * (end - start);
        maxWaterArea = Math.max(maxWaterArea, tempArea);

        if (walls[start] < walls[end]) left++;
        else right--;
    }

    return maxWaterArea;
}