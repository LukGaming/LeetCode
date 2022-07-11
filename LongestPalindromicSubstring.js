/*Given a string s, return 
the longest palindromic 
substring in s.
 
Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:
Input: s = "cbbd"
Output: "bb"
 */
var s = "babad"
function longestPalindrome(s) {
    var usedChars = []
    var finalString = []
    for (let i = 0; i < s.length; i++){;
        if (usedChars.findIndex((x) => x == s[i]) != -1) {
          console.log(s[i], i);
          finalString = [];
        } else {
          finalString.push(s[i]);
        }
    }
    console.log(finalString);
}
longestPalindrome(s)