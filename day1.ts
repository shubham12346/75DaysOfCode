// Day1 
// Problem1 

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r


// Solution 


function mergeAlternately(word1: string, word2: string): string {
    const maxWordLength = Math.max(word1.length,word2.length)
    let resultString= '';
    for(let index=0;index<maxWordLength ;index++){
        let startingString= word1[index]?word1[index]:'';
        let endingString = word2[index]?word2[index]:'';


        resultString+=startingString+endingString;


    }
return resultString;
};

let word1 = 'abc';
let word2='pqr';
const mergedString = mergeAlternately(word1,word2);
console.log(mergedString)