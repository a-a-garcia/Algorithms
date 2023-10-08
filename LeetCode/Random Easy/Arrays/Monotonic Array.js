// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 

// Example 1:

// Input: nums = [1,2,2,3]
// Output: true
// Example 2:

// Input: nums = [6,5,4,4]
// Output: true
// Example 3:

// Input: nums = [1,3,2]
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -105 <= nums[i] <= 105

var isMonotonic = function(nums) {
   //set flags to track if the array is decreasing or increasing.
   let increasing = false;
   let decreasing = false;

   //loop through the nums array. We start at one to compare the array at index 1 to array at index i-1 (or the element before i.)
   for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            // if the number at element i (which starts at index 1) is GREATER than the number at element i - 1 (which starts at index 0), we know the array is going from smaller to larger.
            increasing = true
        } else if (nums[i] < nums[i - 1]) {
            // if the number at element i (which starts at index 1) is LESSER than the number at element i - 1 (which starts at index 0), we know the array is going from larger to smaller.
            decreasing = true
        }

        // an array is not considered monotonic if it's both increasing and decreasing, so return false if so.
        if (increasing && decreasing) {
            return false
        }
    }
    return true
};