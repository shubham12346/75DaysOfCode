// 739. Daily Temperatures
// Solved
// Medium
// Topics
// Companies
// Hint
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

function dailyTemperatures(temperatures: number[]): number[] {
    const len = temperatures.length;
    const result:number[] = new Array(len).fill(0);
    const stack:number[] = [] ;

    for(let i=0;i<len;i++){
        while( stack.length>0 && temperatures[i]>temperatures[stack[stack.length-1]] ){
            const j = stack.pop() 
            result[j] = i-j;
        }
        stack.push(i)
    }
    return result;
};