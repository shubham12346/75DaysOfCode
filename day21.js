// 1207. Unique Number of Occurrences
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
function uniqueOccurrences(arr) {
    var uniqueElement = new Set(arr);
    var uniqueArray = __spreadArray([], uniqueElement, true);
    var indexPointer = 0;
    var countArr = [];
    while (indexPointer < uniqueArray.length) {
        var count = 0;
        for (var index = 0; index < arr.length; index++) {
            if (uniqueArray[indexPointer] === arr[index]) {
                count++;
            }
        }
        countArr.push(count);
        indexPointer++;
    }
    var countUnique = new Set(countArr);
    return countArr.length === countUnique.size;
}
function uniqueOccurrences1(arr) {
    var ms = new Map();
    for (var i = 0; i < arr.length; i++) {
        ms.set(arr[i], 1 + (ms.get(arr[i] || 0)));
    }
    var vals = [];
    for (var _i = 0, ms_1 = ms; _i < ms_1.length; _i++) {
        var _a = ms_1[_i], key = _a[0], value = _a[1];
        if (vals.includes(value)) {
            return false;
        }
        vals.push(value);
    }
    return true;
}
;
var answer1 = uniqueOccurrences1([1, 2, 2, 1, 1, 3]);
console.log("Answer  : ", answer1);
