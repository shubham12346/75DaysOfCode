// 283. Move Zeroes
// Easy
// 14.7K
// 371
// Companies
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let leftIndex = 0;
    let rightIndex = 1;
    while(rightIndex< nums.length){
        let leftNum = nums[leftIndex];
        let rightNum = nums[rightIndex];
    
        if(leftNum===0 && rightNum !==0){
            nums[leftIndex] = rightNum;
            nums[rightIndex] = leftNum;
        }else if (leftNum==0 && rightNum===0){
            rightIndex++;
        }else{
            leftIndex++;
            rightIndex++
        }
    }
    }


let ans = [0,1,0,3,12];
moveZeroes(ans)
console.log(ans);