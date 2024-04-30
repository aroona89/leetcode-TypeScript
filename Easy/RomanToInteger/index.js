"use strict";
// dictionary using map object approach
Object.defineProperty(exports, "__esModule", { value: true });
function romanToInt(s) {
    const romanToInt = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanToInt[s[i]];
        const nextNumeral = s[i + 1];
        if (nextNumeral) {
            const nextValue = romanToInt[nextNumeral];
            if (currentValue < nextValue) {
                total += nextValue - currentValue;
                i++;
            }
            else {
                total += currentValue;
            }
        }
        else {
            total += currentValue;
        }
    }
    return total;
}
console.log(romanToInt("XIX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
