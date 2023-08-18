// 1207. Unique Number of Occurrences

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

function uniqueOccurrences(arr: number[]): boolean {
  let uniqueElement = new Set(arr);
  let uniqueArray = [...uniqueElement];
  let indexPointer = 0;
  let countArr: number[] = [];
  while (indexPointer < uniqueArray.length) {
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
      if (uniqueArray[indexPointer] === arr[index]) {
        count++;
      }
    }
    countArr.push(count);
    indexPointer++;
  }

  let countUnique = new Set(countArr);

  return countArr.length === countUnique.size;
}

function uniqueOccurrences1(arr: number[]): boolean {
  let ms = new Map();
  for (let i = 0; i < arr.length; i++) {
    ms.set(arr[i], 1 + ms.get(arr[i] || 0));
  }
  let vals: number[] = [];

  for (let [key, value] of ms) {
    if (vals.includes(value)) {
      return false;
    }
    vals.push(value);
  }
  return true;
}
let answer1 = uniqueOccurrences1([1, 2, 2, 1, 1, 3]);
console.log("Answer  : ", answer1);
