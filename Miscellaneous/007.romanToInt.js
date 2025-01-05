function romanToInt(roman) {
    const roman2IntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let res = 0;
    for (let i = 0; i < roman.length; i++) {
        const curr = roman2IntMap[roman[i]];
        const next = roman2IntMap[roman[i + 1]];

        if (curr < next) {
            // IV -> 5-1 -> 4
            res += next - curr;
            i++;
        } else {
            res += curr;
        }
    }

    return res;
}