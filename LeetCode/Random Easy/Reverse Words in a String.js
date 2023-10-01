// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.



// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

//brute force
var reverseWords = function(s) {
    let stringToArr = s.split(" ")
    let result = ""
    for (let i = 0; i < stringToArr.length; i++) {
        let currentWord = stringToArr[i]
        i === (stringToArr.length-1) ? result += currentWord.split("").reverse().join("") : result += currentWord.split("").reverse().join("") + " "
    }
    return result
};

//split string into an array, a blank space being the condition in which to create a new element. each time it encounters a space, basically every letter before it becomes an element in a new array. each element in new arr will be a word
//create a result holder
// loop through the new array. 
// the bulk of the reverse logic is happening at .split("").reverse().join(""). .split("") turns each word into an array with each letter as an element, we reverse that array, then we turn that reversed array back into a string with join("").
// if we are at the last word, then we just do that logic, if we're not, then we do that logic but add a space to account for spacing.

//time complexity O(n)
//space complexity O(n) 

// a more consise & optimized solution
// var reverseWords = function(s) {
//     return s.split(" ").map(word => word.split("").reverse().join("")).join(" ");
// };

reverseWords("Let's take LeetCode contest")
reverseWords("hehe hehe hehe hehe")
