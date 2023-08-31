# 75DaysOfCode

leetcode 75days of code challenge
day1
Problem1

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1: a b c
word2: p q r
merged: a p b q c r

Solution

For this problem ,

1. I have taken a varible to get maximum length between 2 strings
2. Now loop through maximum ,
3. Check if the index of loop exist in the string , if it exist merge them alternately

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
Assuming str1 and str2 have a common divisor , str1 = t1+t1... *m times and str2 =t1+t1... *ntimes , if we combine them the resultant string should be equal so str1+str2 = str2+str1 , so to have gcd of string this condition should be true .

To calculate gcd i am using euclidean algorithm Euclidean algorithm
It is an efficient method for calculating gcd of two numbers
For eg two find gcd of two numbers 12 18
Start iteration with 12 and 18 . here we subtract smaller number from larger until we get a number equal to both 12 and 18

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
Iterate over each kid candies and Now check if after adding extra candy to each candy is less or greater than the greatest among the kid and accordingly put their boolean values

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
(exception condition when n-1 does not exit put a or condition it with index which is first element similarly for the last element )

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
Day6 Problem no: 151
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated
by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The
returned string should only have a single space separating the words. Do not include any
extra spaces.
Example 1:
Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:
Input: s = " hello world "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Solution
For this problem ,
Step 1. Trim and Split string into array with single blankspace and store it
Step 2 . Reverse the stored array
Step 3. Loop the reversed array and concatenate only the string with length
greater than 1 with an blank space ;
Shubham Agrahari
Step 4 : return the result string after trimming again ;

Day7 Problem no: 238

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Solution

For this problem following brute force approach
Iterate over two loops
After the first loop initialize a variable for multiplication of that index
Check condition (i==j) it should not calculate multiplication of its own

Day8 Problem no: 334
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j
< k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
Example 1:
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Solution
For this problem , to get num[i]<num[j]<num[k]
1 . Iterate over the loop and calculate nums[i] and num[j]; 2. To calculate num[i] and num[j] , we initialize two variable at tops as max1 and max2 3. If we found max1 and max2 , so if there will be any element greater than these 2 , will
hit the last condition which return true and stops the loop

Day9 Problem no: 443
Companies
Given an array of characters chars, compress it using the following algorithm:
Begin with an empty string s. For each group of consecutive repeating characters in chars:
● If the group's length is 1, append the character to s.
● Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the
input character array chars. Note that group lengths that are 10 or longer will be split into
multiple characters in chars.
After you are done modifying the input array, return the new length of the array.
You must write an algorithm that uses only constant extra space.
Example 1:
Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be:
["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
Example 2:
Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single
character.
Example 3:
Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
For this problem ,
Shubham Agrahari

1. I am using here two pointers for this problem
2. Iterate through the chars array length up to second last element
3. We initialize pointerOne as the current element and pointer two as the next
   element and initially the count is 1.
4. On each iteration we will check if current element and next element are not equal
   , if not then we will check the count if one then only the string is concatenated
   else both string and count is concatenated . if both pointer are equal than count
   will increase
5. In loop we can’t check the last element , so last element is checked outside the
   loop and after that we will modify the give input array and return our
   concatenated string’s length;

Day10 Problem no: 283

Companies
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

For this problem ,
Note - we have to do it in place means have to modify original array instead of creating of new array
Taking two pointers as left =0 , right = 1 and loop the array while right < array’s length .
Swap the two element when first element is zero and second is not .
If both the pointers number is zero than increase right index
Else increase both the pointers

Day11 Problem no: 392

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

For this problem ,

Take two pointers as pointer1 , pointer2 and loop the array while pointer2 < array’s length .
Increase pointer1 only when s has element that exist in t due to the pointer it will always be in a sequence
Compare the length of s with pointer2 , if pointer2 exceed means it has a subsequence else return false

Day12 Problem no: 11

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1

For this problem ,

Take two pointers as startIndex , endIndex and loop the array while startIndex< endIndex
Calculate the area where height is will be minimum of start and end and width will be from endIndex to startIndex
Compare it with maxarea
Decrease the pointer (startIndex, or endIndex) whose height is small

75 Days of Code

Day13 Problem no: 1679 Max Number of K-Sum Pairs (leetcode)

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:

- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
  There are no more pairs that sum up to 5, hence a total of 2 operations.
  Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:

- Remove the first two 3's, then nums = [1,4,3]
  There are no more pairs that sum up to 6, hence a total of 1 operation.

For this problem ,

Take two pointers as startIndex , endIndex and loop the array while startIndex< endIndex
Sort the num array
Compare the sum of two pointer , if they equal to given k then increase startIndex and decrease endIndex
If sum is greater than k ,reduce the endIndex else increase startIndex

Day14 Problem no: 643. Maximum Average Subarray I (leetcode)

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000

For this problem , we are gonna use sliding window approach
What is a sliding window Technique and when it is used , key terms included in the question which is solved by sliding window ?
Sliding window technique is a common algorithm used for solving problem that includes array , strings , sequence or other data structure with a defined order
Its main purpose or it aims to reduce the nested loop to single loop and reduce time complexity
Sliding window technique pseudo code
Initialize : defining the size and initialize the beginning sequence
Process initial window : perform some initial calculation within the window
Slide the window : Move the window by one step (element) to the right. This means removing the leftmost element from the window and adding the next element on the right side.

Update Computation :update the ongoing computation or analysis based on the change in the window content .

Repeat : repeat until the end of the loop

Key terms to know problem can be solved by sliding window :
Question includes : Array ,SubArray , SubString , Largest , Smallest ,Maximum and Minimum
Solution of the above problem using sliding window

Calculate the sum up to k for initial window (Initialization nad process with initial calculation )
Initialize a variable as maxsum before starting sliding through the loop
Slide the sum var (intial window) starting with k upto total number.length -k (Sliding the window , update and repeat )
Return the ans as maxnum/k

Day15 Problem no: 1456. Maximum Number of Vowels in a Substring of Given Length (leetcode)

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

For this problem , we are gonna use sliding window approach

Key terms to know problem can be solved by sliding window :
Question includes : Array ,SubArray , SubString , Largest , Smallest ,Maximum and Minimum with window size may or may not present
Solution of the above problem using sliding window

Calculate the initial count of letters in string up to k for initial window (Initialization nad process with initial calculation )
Initialize a variable as maxsum before starting sliding through the loop
Slide the initialCount var (intial window) starting with k upto total number.length -k (Sliding the window , update and repeat )
Return the ans as maxCountOfVowel

Day16 Problem no: 1004. Max Consecutive Ones III (leetCode) (leetcode)

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

For this problem , we are gonna use sliding window approach

Key terms to know problem can be solved by sliding window :
Question includes : Array ,SubArray , SubString , Largest , Smallest ,Maximum and Minimum with window size may or may not present
Solution of the above problem using sliding window

Initialize two pointers as start and consOne .
Start the loop , when current number is zero then decrease the k
If k becomes negative then , start a loop to remove previously flipped zeroes , by increasing the start pointer and k , get out of loop when k is positive
At each iteration compare the maximum with largest length from index to where the start pointer is .

Day17 Problem no: 1493. Longest Subarray of 1's After Deleting One Element (leetcode)
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
Example 1:
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.

Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
For this problem , we are gonna use sliding window approach

Key terms to know problem can be solved by sliding window :
Question includes : Array ,SubArray , SubString , Largest , Smallest ,Maximum and Minimum with window size may or may not present
Solution of the above problem using sliding window

Initialize two pointers as start and zeroCount .
Start the loop , when current number is zero then decrease the zeroConter and keep the window size increasing
If zeroCounter becomes negative then , start a loop to reduce the window size by removing the element up to zero element’s index , while increasing startPointer , when it finds the zero element in the window then increase zeroCounter
At each iteration compare the maximum from index to where the start pointer is to get largest subarray of 1

Day18 Problem no: 1732. Find the Highest Altitude

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

Example 1:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
Example 2:

Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

Solution of the above problem
We initialize two variable , one (sum) to know change in elevation at each index
Second (maxGain ) to know maximum peak from origin
Initially both are initialize to zero as representing origin
In the loop we add elevations in sum for ith index and then compare till the last element

Day19 Problem no: 724. Find Pivot Index (leetcode)

Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
Return the leftmost pivot index. If no such index exists, return -1.

Example 1:
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

Example 2:
Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.

Solution of the above problem using postfix sum
We initialize two variables one is sum and another is postfixSum which is empty array
We Loop through the nums array in reverse and create the postfixSum array in each iteration
Now again we loop again from start to end , and initialize sum as zero again , and on each iteration we compare sum which is addition of current element and compare with postfixSum current index , whenever current sum equal postfixSumm ‘s element then return index else after loop return -1

Day 20 Problem no: 2215. Find the Difference of Two Arrays
(leetcode)
Type - Hashmap/Set

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
Example 2:

Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

Solution of the above problem using set and filter method
Converting given two num arrays into set which will remove the duplicates
Using filter method removing the common element in both array

Day 21 Problem no: 1207. Unique Number of Occurrences
Type Hashmap /Sets

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

Solution of the above problem using Brute force approach
Create a array of unique elements
Start a loop in the unique element , inside the loop create a nested loop for original array , on each iteration we are adding the count of unique element if uniqueArr[indexPointer] === arr[index] , when the for loop end we push this count to a new array named as countArr
After the end of both loop ,we create a new array of unique counts of the countArray of all the element before
We compare both and return result

Solution of above problem using in Optimize way using map and set
Using map can solve this problem with single loop instead of nested loop
Initialize an empty has map and start a loop to the array given to us
Here we are adding map key as unique element and their value as count
After the loop end , we initialize an empty array
We push the count of map key in this array by checking the repetition of number , if any number repeats it will return false else true after loop ends

75 Days of Code Day 22 Problem no: 1657. Determine if Two Strings Are Close (leetcode)
Type Hashmap /Sets

Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"

Solution of above problem using in Optimize way using map and set
Using logic, we list out all the possible logical ways this can either be true or false.
Length of two strings must be equal
They should not contain different characters, they must have the same characters, the number of occurrences or the count of each character does not matter.
The two arrays arr1 and arr2 of character occurence's count, when sorted, should be equal.

75 Days of Code Day 23 Problem no:2352. Equal Row and Column Pairs (leetcode)
Type Hashmap /Sets

Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

Example 1:

Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:

- (Row 2, Column 1): [2,7,7]
  Example 2:

Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:

- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]

Solution using brute force
One loop for row iteration
Another for column iteration
Again one as we have check one row for all the columns so

Solution of above problem using in Optimize way using map
Create a map of row ,in which row elements are keys and row’s repetition is the value
Use a two for loop to iterate through the columns of the matrix and create a column
Check if the column exist in row map , if exist check its value (which is its count ) then add to original count

75 Days of Code Day 24 Problem no:2390. Removing Stars From a String (leetcode)
Type : Stacks

You are given a string s, which contains stars \*.

In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.

Example 1:

Input: s = "leet\**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:

- The closest character to the 1st star is 't' in "leet\**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod\*e".
- The closest character to the 3rd star is 'd' in "lecod\*e". s becomes "lecoe".
  There are no more stars, so we return "lecoe".
  Example 2:

Input: s = "erase**\***"
Output: ""
Explanation: The entire string is removed, so we return an empty string

Solution using Stack
Simply following LIFO (last in first out) if it founds \* it pos the previous element else push new element

75 Days of Code Day 25 Problem no:735. Asteroid Collision
(leetcode)
Type : Stacks

We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

75 Days of Code Day 26 Problem no:394. Decode String
(leetcode)
Type : Stacks

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Solution using Stack

Create two stacks number stack and string stack and iterate a loop
Push all the number in the number stack
Push all the string in string stack
If top element === ‘ ]‘ pop all the element until top element === ‘[’
Multiply all the popped element with number of time the the top element of number stack and pop the top element

75 Days of Code Day 27 Problem no:933. Number of Recent Calls
(leetcode)
Type : Queues

You have a RecentCounter class which counts the number of recent requests within a certain time frame.

Implement the RecentCounter class:

RecentCounter() Initializes the counter with zero recent requests.
int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

Example 1:

Input
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
Output
[null, 1, 2, 3, 3]

Explanation
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1); // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100); // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001); // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002); // requests = [1, 100, 3001, 3002], range is [2,3002], return 3

Solution using Stack

Push all the elements in the queue , delete all the elements which are not in range (less than range element - 3000)
Return the length of array

75 Days of Code Day 28 Problem no:649 Dota2 Senate
(leetcode)
Type : Queues

In the world of Dota2, there are two parties: the Radiant and the Dire.

The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise one of the two rights:

Ban one senator's right: A senator can make another senator lose all his rights in this and all the following rounds.
Announce the victory: If this senator found the senators who still have rights to vote are all from the same party, he can announce the victory and decide on the change in the game.
Given a string senate representing each senator's party belonging. The character 'R' and 'D' represent the Radiant party and the Dire party. Then if there are n senators, the size of the given string will be n.

The round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.

Suppose every senator is smart enough and will play the best strategy for his own party. Predict which party will finally announce the victory and change the Dota2 game. The output should be "Radiant" or "Dire".

Example 1:

Input: senate = "RD"
Output: "Radiant"
Explanation:
The first senator comes from Radiant and he can just ban the next senator's right in round 1.
And the second senator can't exercise any rights anymore since his right has been banned.
And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.
Example 2:

Input: senate = "RDD"
Output: "Dire"
Explanation:
The first senator comes from Radiant and he can just ban the next senator's right in round 1.
And the second senator can't exercise any rights anymore since his right has been banned.
And the third senator comes from Dire and he can ban the first senator's right in round 1.
And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.

Solution using Stack

We will create two arrays as radiant queue and dire queue and push all characters in string r to radiant and s to dire using a loop
We will delete first element from both array and push to one which index is lower as (index + n ) until both of arrays become empty
Return checking if radiant queue is empty

75 Days of Code Day 29 2095. Delete the Middle Node of a Linked List
(leetcode)
Type : Linked List

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

Example 1:

Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node.
Example 2:

Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.
Example 3:

Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.

Solution using array

Solution using fast and slow algorithm
We are using fast and slow algorithm , so we create fast , slow and prev as three pointer to traverse
The fast will move 2 steps , slow will move one step , when fast reach end of the list slow will reach the middle , prev will point the previous slow
we will just change the prev pointer next to slow’s next element so the middle element will be deleted

75 Days of Code Day 30 328. Odd Even Linked List
(leetcode)
Type : Linked List

Medium

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Example 1:

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
Example 2:

Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

Solution using array

This solution fails o(1) space complexity so now

Solution using fast and slow algorithm
We are going to create two linked list one is even list and other is odd list and after that we link oddlist with even list

75 Days of Code Day 31 206. Reverse Linked List
(leetcode)
Type : Linked List

Medium

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:

Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []

75 Days of Code Day 33 Problem 104. Maximum Depth of Binary Tree5

Type : Tree /DFS

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2

Solution using DFS
Traverse the list with recursion

75 Days of Code Day 34 Problem 104. 872. Leaf-Similar Trees

Type :BST / dfs

Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Example 1:

Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true
Example 2:

Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false
[1,null,2]
Output: 2

Solution using DFS
Traverse the list with recursion
