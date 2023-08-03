// 151. Reverse Words in a String
// Medium
// 6.8K
// 4.8K
// Companies
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

function reverseWords(s: string): string {
    let s1 = s.trim();
     let wordsArr = s1.split(" ");
     let reverseArr = wordsArr.reverse();
     let resultString='';
     for(let index =0;index<reverseArr.length;index++){
       if(reverseArr[index].length>=1){
        resultString+=" "+reverseArr[index];
       }
     } 
     return resultString;
   };

   let reverString = reverseWords("the sky is blue")
   console.log(reverString)