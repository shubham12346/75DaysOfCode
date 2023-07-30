# 75DaysOfCode
leetcode 75days of code challenge 
day1 
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

Day2
Problem no: 1071 

For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 
Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""



Solution 


For this problem ,
Assuming str1 and str2 have a common divisor  , str1 = t1+t1... *m times and str2 =t1+t1... *ntimes , if we combine them the resultant string should be equal  so str1+str2 = str2+str1  , so to have gcd of string this condition should be true  .

To calculate gcd i am using euclidean algorithm  Euclidean algorithm 
It is an efficient method for calculating gcd of two numbers 
For eg two find gcd of two numbers  12 18 
Start iteration with 12 and 18  . here we subtract smaller number from larger until we get   a number equal to both 12 and 18 

code 
   function gcd(x,y){
   while(x!=y){
       if(x>y){
      x = x-y;
  }else {
     y= y-x;
 }
  return x;


}
