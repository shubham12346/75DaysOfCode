
// 136. Single Number
// Solved
// Easy
// Topics
// Companies
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

function singleNumber(nums: number[]): number {
    if(nums.length==1)return nums[0];
     
     let ans=nums[0] ;
     for(let num =1;num<nums.length;num++){
         ans = ans ^ nums[num];
     }
     return ans;
 
 };