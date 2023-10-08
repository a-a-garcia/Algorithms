// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100


// 1. Can i assume the array is sorted - no.

// Brute force appraoch

// const findNumberOfGoodPairs = (arr) => {
//     let goodPairs = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 goodPairs++
//             }
//         }
//     }
//     return goodPairs
// }

//time: (On^2) not ideal
//space: On (?)

const findNumberOfGoodPairs2 = (nums) => {
    const numCount = {}; // Initialize an empty object to store element counts
    let goodPairs = 0;

    // Iterate through the array and count the occurrences of each element
    for (const num of nums) {
        // If the element is not in numCount, initialize it with a count of 0
        if (!(num in numCount)) {
            numCount[num] = 0;
        }

        // Increment the count for the current element
        numCount[num]++;
    }

    // Iterate through the counts in the numCount object and calculate the number of good pairs
    for (const count of Object.values(numCount)) {
        // If there are more than one occurrence of an element, you can form good pairs
        if (count > 1) {
            goodPairs += (count * (count - 1)) / 2; // Calculate the number of good pairs for this element

            //To understand why this formula works, let's think about how good pairs are formed. A good pair consists of two indices (i, j) where nums[i] == nums[j] and i < j.

            // If there are count occurrences of an element, we can choose any two of those occurrences to form a good pair. We have count choices for the first occurrence and count - 1 choices for the second occurrence (because i must be less than j).

            // However, when we count each pair, we are counting it twice. For example, if we choose the first occurrence as (i) and the second occurrence as (j), it's the same pair as if we choose the first occurrence as (j) and the second occurrence as (i). So, we need to divide by 2 to avoid double-counting.

            // Therefore, the formula (count * (count - 1)) / 2 calculates the number of good pairs for a specific element with a given count.
        }
    }

    return goodPairs;
}


console.log(findNumberOfGoodPairs2([1,2,3,1,1,3]))
console.log(findNumberOfGoodPairs2([1,1,1,1]))
console.log(findNumberOfGoodPairs2([1,2,3]))

//more optimized soln
//loop once instead of nested loops to avoid quadratic time.