// dictionary using map object approach

// function romanToInt(s: string): number {
//   // Create a hash table (Map) to represent Roman numerals and their integer values
//   const romanToIntMap: Map<string, number> = new Map([
//       ['I', 1],
//       ['V', 5],
//       ['X', 10],
//       ['L', 50],
//       ['C', 100],
//       ['D', 500],
//       ['M', 1000]
//   ]);

//   // Initialize the total sum
//   let total = 0;

//   // Iterate through the Roman numeral string
//   for (let i = 0; i < s.length; i++) {
//       // Get the current Roman numeral and its integer value
//       const currentNumeral = s[i];
//       // console.log("currentNumeral",currentNumeral);
//       const currentValue = romanToIntMap.get(currentNumeral)!;
//       // console.log("currentValue",currentValue);

//       // Check if there is a next numeral
//       const nextNumeral = s[i + 1];
//       // console.log("nextNumeral",nextNumeral);
//       if (nextNumeral) {
//           const nextValue = romanToIntMap.get(nextNumeral)!;

//           // Check for subtractive pairs (e.g., IV, IX, etc.)
//           if (currentValue < nextValue) {
//               // If there is a subtractive pair, subtract the current value from the total
//               total += nextValue - currentValue;
//               // Increment the index to skip the next numeral (since it was part of a pair)
//               i++;
//           } else {
//               // Otherwise, add the current value to the total
//               total += currentValue;
//           }
//       } else {
//           // Add the current value to the total (last numeral in the string)
//           total += currentValue;
//       }
//   }

//   // Return the total sum as the integer representation of the Roman numeral
//   return total;
// }

// // Example usage
// console.log(romanToInt("XIX")); // Output: 19
// console.log(romanToInt("LVIII")); // Output: 58
// console.log(romanToInt("MCMXCIV")); // Output: 1994


// dictionary using object approach

  // [key: Type]: ValueType
interface romanToIntType {
    [key: string]: number;
}

function romanToInt(s: string): number {
  const romanToInt: romanToIntType = {
    "I":1,
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
          } else {
              total += currentValue;
          }
      } else {
          total += currentValue;
      }
  }
  return total;
}

console.log(romanToInt("XIX"));             
console.log(romanToInt("LVIII"));           
console.log(romanToInt("MCMXCIV"));         
