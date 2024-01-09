/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const map = {};
    for (let i = 0; i < nums.length + 1; i++) {
        map[i] = 0
    }
    for (let i = 0; i <= nums.length; i++) {
        if (map[nums[i]] === 0) {
            map[nums[i]] += 1;
        }
    }
    const missingKey = Object.keys(map).find(key => {
        return map[key] === 0;
    })

    return parseInt(missingKey)
};


//Review:

// A couple of suggestions to improve or optimize the solution:

// Avoid using an object for counting:

// Since you are working with a sequence of numbers, you don't necessarily need an object for counting occurrences. You can use a variable to store the expected sum of the sequence and subtract the sum of the array elements.
// Optimize space complexity:

// You can reduce the space complexity by using just a single variable (expectedSum) instead of creating an object to count occurrences.
// Here's an example of an optimized solution:

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var missingNumber = function(nums) {
//     const n = nums.length;
    
//     // Calculate the expected sum of the sequence [0, 1, ..., n]
//     const expectedSum = (n * (n + 1)) / 2;
    
//     // Calculate the actual sum of the array elements
//     const actualSum = nums.reduce((sum, num) => sum + num, 0);

//     // The missing number is the difference between the expected sum and the actual sum
//     return expectedSum - actualSum;
// };

// This optimized solution maintains the O(n) time complexity but reduces the space complexity by avoiding the use of an additional data structure.
