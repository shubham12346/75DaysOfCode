// 1493. Longest Subarray of 1's After Deleting One Element
// Given a binary array nums, you should delete one element from it.
// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
// Example 1:
// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:
// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:
// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.
function longestSubarray(nums) {
    var startPointer = 0;
    var zeroCount = 1;
    var maxOnes = Number.MIN_VALUE;
    for (var numIndex = 0; numIndex < nums.length; numIndex++) {
        if (nums[numIndex] == 0) {
            zeroCount--;
        }
        while (zeroCount < 0) {
            if (nums[startPointer] === 0) {
                zeroCount++;
            }
            startPointer++;
        }
        maxOnes = Math.max(maxOnes, numIndex - startPointer);
    }
    return maxOnes;
}
var answer = longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]);
console.log("Answer :", answer);
