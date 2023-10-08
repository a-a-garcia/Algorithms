// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// My Solution
var isPalindrome = function(s) {
    if (s.length === 0) {
        return true
    }
    let formattedString = []
    let reversedString = []
    for (let i = 0; i < s.length; i++) {
        let item = s[i].toLowerCase();
        (/^[a-zA-Z0-9]+$/).test(item) ? formattedString.push(item) : null;
    }
    for (let j = s.length - 1; j >= 0; j--) {
        let item = s[j].toLowerCase();
        (/^[a-zA-Z0-9]+$/).test(item) ? reversedString.push(item) : null;
    }
    if (formattedString.join("") === reversedString.join("")) {
        return true
    }
    return false
}



isPalindrome("0P")

// Optimized Soln
// var isPalindrome = function(s) {
//     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

//     return s === s.split('').reverse().join('');
// }