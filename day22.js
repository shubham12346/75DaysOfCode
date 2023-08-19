// 1657. Determine if Two Strings Are Close
// Two strings are considered close if you can attain one from the other using the following operations:
// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.
// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
// Example 1:
// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:
// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:
// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"
function closeStrings(word1, word2) {
    if (word1.length !== word2.length)
        return false;
    var length = word1.length;
    var wordmap1 = new Map();
    var wordmap2 = new Map();
    var set1 = new Set(word1.split(""));
    for (var index = 0; index < length; index++) {
        wordmap1.set(word1[index], wordmap1.has(word1[index]) ? wordmap1.get(word1[index]) + 1 : 1);
        wordmap2.set(word2[index], wordmap2.has(word2[index]) ? wordmap2.get(word2[index]) + 1 : 1);
        if (!set1.has(word2[index]))
            return false;
    }
    var arr1 = Array.from(wordmap1.values()).sort();
    var arr2 = Array.from(wordmap2.values()).sort();
    for (var index = 0; index < arr1.length; index++) {
        if (arr1[index] !== arr2[index])
            return false;
    }
    return true;
}
var ans = closeStrings("cabbba", "abbccc");
console.log(ans);
