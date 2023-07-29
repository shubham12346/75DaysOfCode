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
function mergeAlternately(word1, word2) {
    var maxWordLength = Math.max(word1.length, word2.length);
    var resultString = '';
    for (var index = 0; index < maxWordLength; index++) {
        var startingString = word1[index] ? word1[index] : '';
        var endingString = word2[index] ? word2[index] : '';
        resultString += startingString + endingString;
    }
    return resultString;
}
;
var word1 = 'abc';
var word2 = 'pqr';
var mergedString = mergeAlternately(word1, word2);
console.log(mergedString);
