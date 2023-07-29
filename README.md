# 75DaysOfCode
leetcode 75days of code challenge 

Problem1 

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r


Solution 

For this problem , 
1. I have taken a varible to get maximum length between 2  strings
2. Now loop through maximum  , 
3. Check if the index of loop exist in the string  , if it exist merge them alternately  

