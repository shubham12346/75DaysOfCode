// 338. Counting Bits
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
 

// Constraints:

// 0 <= n <= 105

function countBits(n: number): number[] {
    let ans =[];
       for(let num =0;num<n+1;num++){
           let temp = num;
           let count =0;
           while(temp){
               if (temp & 1) {
                   count++;
               }
               temp = temp >> 1;
               console.log("temp=",temp)
           }
           ans.push(count)
       }
       return ans;
   };
   