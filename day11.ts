// 392. Is Subsequence
// Easy
// 8K
// 447
// Companies
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

function isSubsequence(s: string, t: string): boolean {
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer2 < t.length) {
    if (s[pointer1] === t[pointer2]) {
      pointer1++;
    }
    pointer2++;
  }
  if (pointer1 >= s.length) {
    return true;
  }
  return false;
}

let ans = isSubsequence("abc","abcdefgh");
console.log(ans)
