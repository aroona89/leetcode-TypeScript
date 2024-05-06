"use strict";
// Q5 "Valid Parentheses"
Object.defineProperty(exports, "__esModule", { value: true });
function isValid(s) {
    const stack = [];
    const mapping = { ")": "(", "}": "{", "]": "[" };
    for (const char of s) {
        if (["(", "[", "{"].includes(char)) {
            stack.push(char);
        }
        else if (stack.length === 0 || mapping[char] !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
}
var s = "()";
console.log(isValid(s));
var s = "()[]{}";
console.log(isValid(s));
var s = "(]";
console.log(isValid(s));
