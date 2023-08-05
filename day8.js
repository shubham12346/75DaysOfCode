// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
// Example 1:
// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:
// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
function increasingTriplet(nums) {
    if (nums.length <= 2)
        return false;
    var max1 = Number.MAX_VALUE;
    var max2 = Number.MAX_VALUE;
    for (var index = 0; index < nums.length; index++) {
        if (nums[index] <= max1) {
            max1 = nums[index];
        }
        else if (nums[index] <= max2) {
            max2 = nums[index];
        }
        else {
            return true;
        }
    }
    return false;
}
;
var soln = increasingTriplet([5, 4, 3, 2, 1]);
console.log(soln);
