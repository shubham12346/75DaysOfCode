// 215. Kth Largest Element in an Array
// Solved
// Medium
// Topics
// Companies
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

function findKthLargest(nums: number[], k: number): number {
    // let newNums = nums.sort((a,b)=>a-b);
    // return newNums[newNums.length-k];



    const quickSort = (arr:number[]):number[]=>{
        if(arr.length<=1){
            return arr;
        }

        const pivot = arr[Math.floor(Math.random()*arr.length)];
        const left =[];
        const right =[];
        const equal =[];

        for(const num of arr){
            if(num<pivot){
                left.push(num)
            }else if(num>pivot){
                right.push(num)
            }else{
                equal.push(num);
            }
        }

        if(k<=right.length){
            return quickSort(right);
        }
        else if(k<= right.length + equal.length){
            return equal;

        }else{
            k-= (right.length+equal.length);
            return quickSort(left);
        }
    }

    const sorted = quickSort(nums);
    return sorted[sorted.length-1];
};