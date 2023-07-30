// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
function gcd(x, y) {
    while (x != y) {
        x > y ? x = x - y : y = y - x;
    }
    return x;
}
function gcdOfStrings(str1, str2) {
    return (str1 + str2 === str2 + str1) ? str2.slice(0, gcd(str1.length, str2.length)) : '';
}
;
var resultStr = gcdOfStrings("ABABAB", "ABAB");
console.log(resultStr);
