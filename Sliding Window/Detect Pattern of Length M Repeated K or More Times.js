//THIS IS SLIDING WINDOW TECHNIQUE

// Given an array of positive integers arr, find a pattern of length m that is repeated k or more times.

// A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively without overlapping. A pattern is defined by its length and the number of repetitions.

// Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.

 

// Example 1:

// Input: arr = [1,2,4,4,4,4], m = 1, k = 3
// Output: true
// Explanation: The pattern (4) of length 1 is repeated 4 consecutive times. Notice that pattern can be repeated k or more times but not less.
// Example 2:

// Input: arr = [1,2,1,2,1,1,1,3], m = 2, k = 2
// Output: true
// Explanation: The pattern (1,2) of length 2 is repeated 2 consecutive times. Another valid pattern (2,1) is also repeated 2 times.
// Example 3:

// Input: arr = [1,2,1,2,1,3], m = 2, k = 3
// Output: false
// Explanation: The pattern (1,2) is of length 2 but is repeated only 2 times. There is no pattern of length 2 that is repeated 3 or more times.

/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
//  */
// var containsPattern = function(arr, m, k) {
//     for (let i = 0; i <= arr.length - m * k; i++) {
//         const pattern = arr.slice(i, i + m * k); // Extract a pattern of length m*k

//         // Check if the pattern consists of repeated subarrays of length m
//         let isPattern = true;
//         for (let j = 0; j < k - 1; j++) {
//             const subArr = arr.slice(i + j * m, i + (j + 1) * m);
//             if (!arraysAreEqual(subArr, arr.slice(i + (j + 1) * m, i + (j + 2) * m))) {
//                 isPattern = false;
//                 break;
//             }
//         }

//         if (isPattern) {
//             return true; // If the pattern is found, return true
//         }
//     }

//     return false; // If no repeating pattern is found, return false

//     // Helper function to compare arrays for equality
//     function arraysAreEqual(arr1, arr2) {
//         if (arr1.length !== arr2.length) {
//             return false;
//         }
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] !== arr2[i]) {
//                 return false;
//             }
//         }
//         return true;
//     }
// };

//optimized solution
var containsPattern = function(arr, m, k) {
    for (let i = 0; i <= arr.length - m * k; i++) {
        let isPattern = false; // Initialize isPattern to false
        for (let j = 0; j < m * (k - 1); j++) {
            if (arr[i + j] !== arr[i + j + m]) {
                isPattern = false; // If inconsistency is found, set isPattern to false
                break;
            } else {
                isPattern = true; // If elements match, set isPattern to true
            }
        }
        if (isPattern) {
            return true; // If the pattern is found, return true
        }
    }
    return false; // If no repeating pattern is found, return false
};

// Sample input
const arr = [1, 2, 4, 4, 4, 4];
const m = 1;
const k = 3;

console.log(containsPattern(arr, m, k)); // Expected output: true

// Test cases
console.log(containsPattern([1, 2, 4, 4, 4, 4], 1, 3)); // true
console.log(containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2)); // true
console.log(containsPattern([1, 2, 1, 2, 1, 3], 2, 3)); // false

//SLIDING WINDOW TECHNIQUE

// The outer for loop iterates through the arr from index 0 to arr.length - m * k. This loop defines the starting point for the sliding window. It ensures that the window of size m * k can slide completely through the array without going out of bounds.

// Within the outer loop, there is an inner for loop that iterates m * (k - 1) times. This inner loop is used to compare elements within the current window. m * (k - 1) is the length of the window that needs to match for a pattern to be considered repeated k times.

// Inside the inner loop, there is a comparison between elements:

// If arr[i + j] !== arr[i + j + m], it means that an inconsistency is found within the current window. In this case, isPattern is set to false, and the loop breaks because there's no need to continue checking within this window.
// If arr[i + j] === arr[i + j + m], it means that the elements within the window match. In this case, isPattern is set to true.
// After the inner loop completes, isPattern will be true if the elements within the window matched for m * (k - 1) times, indicating a potential repeating pattern.

// If isPattern is true after the inner loop, it means that a repeating pattern has been found within the current window. In this case, the function returns true.

// If the outer loop completes without finding a repeating pattern, the function returns false because no such pattern exists in the array.

// In summary, the sliding window technique here is used to slide a window of size m * k through the array and check if the elements within the window match for m * (k - 1) consecutive times. If such a pattern is found, the function returns true; otherwise, it returns false. This approach efficiently checks for repeating patterns without the need to create separate substrings, making it an optimized solution.