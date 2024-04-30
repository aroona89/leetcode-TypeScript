// Q4 "Longest Common Prefix (topic covered: string, trie)"

function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map(); // Create a map to store values and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the number needed to reach the target

    if (map.has(complement)) {
      // If the complement exists in the map, return its index and the current index
      return [map.get(complement)!, i]; // Non-Null Assertion Operator
    }
    // Otherwise, add the current value and its index to the map
    map.set(nums[i], i);
  }
  // If no solution is found, return an empty array
  return [];
}

const nums = [2, 7, 11, 15];
// const nums = [3, 7, 11, 15];
// const nums = [7, 1, 3, 8, 15];
// const nums = [1, 7, 3, 8, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]

// myMap.forEach((value, key) => console.log(value));
// myMap.forEach();

// using Brute Force Approach
// function twoSum(nums: number[], target: number): number [] {
//     let outputArray = [];
//     for (var i = 0; i < nums.length; i++) {
//         var x = nums[i];
//         var y = nums[i+1];
//         if (x + y == target) {
//             outputArray.push(i, i+1)
//         }
//     }
//     return outputArray
// };
// let nums = [2, 7, 11, 15], target = 9;
// console.log(twoSum(nums, target));
