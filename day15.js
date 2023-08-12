// 1456. Maximum Number of Vowels in a Substring of Given Length
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
function maxVowels(s, k) {
    if (s.length < k)
        return -1;
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var initialCountOfVowel = 0;
    for (var stringIndex = 0; stringIndex < k; stringIndex++) {
        if (vowels.includes(s[stringIndex])) {
            initialCountOfVowel++;
        }
    }
    var maxVowelCount = initialCountOfVowel;
    var startIndex = 0;
    for (var endIndex = k; endIndex < s.length; endIndex++) {
        if (vowels.includes(s[startIndex])) {
            initialCountOfVowel--;
        }
        if (vowels.includes(s[endIndex])) {
            initialCountOfVowel++;
        }
        maxVowelCount = Math.max(maxVowelCount, initialCountOfVowel);
        startIndex++;
    }
    return maxVowelCount;
}
var answer = maxVowels("aeiou", 2);
console.log("Answer :", answer);
