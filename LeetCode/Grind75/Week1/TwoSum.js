// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//brute force solution
var twoSum = function(nums, target) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result.push(i)
                result.push(j)
            }
        }
    }
    return result;
}; 

console.log(twoSum([3,3], 6));

//more optimized
var twoSum = function(nums, target) {
    // Create a Map to store numbers and their corresponding indices.
    const numToIndex = new Map();

    // Loop through the input array.
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement, which is the value we need to reach the target.
        const complement = target - nums[i];

        // Check if the complement exists in our Map.
        if (numToIndex.has(complement)) {
            // If it exists, return the indices of the current number and its complement.
            return [numToIndex.get(complement), i];
        }

        // If the complement doesn't exist in the Map, add the current number and its index to the Map.
        numToIndex.set(nums[i], i);
    }
    
    // Handle the case where no solution is found.
    return [];
};