// 75 Days of Code

// Day14  Problem no: 643. Maximum Average Subarray I  (leetcode)

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

function findMaxAverage(nums: number[], k: number): number {
  let numsSize = nums.length;
  if (numsSize < k) return -1;
  let sum: number = Number.MIN_VALUE;
  for (let numIndex = 0; numIndex < k; numIndex++) {
    sum += nums[numIndex];
  }

  let maxSum = sum;
  let startIndex = 0;
  for (let numIndex = k; numIndex < numsSize; numIndex++) {
    sum = sum - nums[startIndex];
    sum = sum + nums[numIndex];
    maxSum = Math.max(maxSum, sum);
    startIndex++;
  }

  let ans = maxSum / k;
  return ans;
}

let answer = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
console.log("Answer :", answer);
