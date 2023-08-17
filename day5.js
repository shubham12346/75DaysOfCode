"use strict";
// 345. Reverse Vowels of a String
// Easy
// 3.8K
// 2.6K
// Companies
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
// Example 1:
// Input: s = "hello"
// Output: "holle"
// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"
function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const chars = s.split('');
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && !vowels.has(s[left])) {
            left++;
        }
        while (left < right && !vowels.has(s[right])) {
            right--;
        }
        if (left < right) {
            const temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }
    }
    return chars.join('');
}
;
let v = reverseVowels("hello");
console.log(v);
