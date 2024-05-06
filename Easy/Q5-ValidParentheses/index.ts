// Q5 "Valid Parentheses"

function isValid(s: string): boolean {
  const stack: string[] = [];
  const mapping: { [key: string]: string } = { ")": "(", "}": "{", "]": "[" };

  for (const char of s) {
    if (["(", "[", "{"].includes(char)) {
      stack.push(char);
    } else if (stack.length === 0 || mapping[char] !== stack.pop()) {
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