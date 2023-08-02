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

Day3
Problem no: 1431 

There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
Note that multiple kids can have the greatest number of candies.


 
Example 1:
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.




Solution 


For this problem , as mention in explanation 
Calculate the greatest among the kid 
Iterate over each kid candies and Now check if after adding extra candy to each candy   is less or greater than the greatest among the kid and accordingly put their boolean values 

Day4
Problem no: 605

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 
Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

Solution 
For this problem , as shown in example 
Check if element at index before and after and current position should e zero 
(exception condition when n-1 does not exit put a or condition  it with index which is first element similarly for the last element )

Day5 Problem no: 345

Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 
Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"

Solution 


For this problem ,
Step 1 :create a array of vowels 
Step 2 : initialize two pointer start and end to loop 
Step 3 : convert the string to array 
Step 4 : loop until start is less than end 
Step 5 : inside loop, again loop until it found a vowel , increase and decrease pointers accordingly 
Step : swap now 
