function isPalindrome(x: number): boolean {
  let originalNumber = x;
  let reversed = 0;
  while (x > 0) {
    const digit = x % 10;
    // console.log("digit:",digit);
    reversed = reversed * 10 + digit; // add last digit
    x = Math.floor(x / 10);
    // console.log(x);
  }
  if (originalNumber === reversed) {
    // console.log(x, reversed);
    // console.log("is a palindrome")
    return true;
  }
  // console.log(inputNumber, reversed);
  // console.log("Not a palindrome");
  return false;
}
let x = 121;
console.log(`${x} is Palindrome:`, isPalindrome(x));
let x1 = -121;
console.log(`${x1} is Palindrome:`, isPalindrome(x1));
let x2 = 10;
console.log(`${x2} is Palindrome:`, isPalindrome(x2));
let x3 = 1000;
console.log(`${x3} is Palindrome:`, isPalindrome(x3));
let x4 = 0;
console.log(`${x4} is Palindrome:`, isPalindrome(x4));
