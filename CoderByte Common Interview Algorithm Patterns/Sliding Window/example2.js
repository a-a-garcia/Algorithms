// REVIEW - What's the sliding window technique?

// In many problems that involve an ARRAY or SUBARRAY, we're often asked to calculate something among subarrays of a given size. 

//Often, these subarrays OVERLAP, which allows us to optomize our algorithm and not recompute the overlapping sections. 

//We can use a SLIDING WINDOW to discern what might be overlapping between subarrays vs what is a new element to be computed.

//PROBLEM:

//Given an array of positive numbers, and a positive number s, find the LENGTH OF THE SMALLEST CONTIGUOUS SUBARRAY WHOSE SUM IS >= s. Return 0 if no such subarray exists.

//ALGORITHM SUMMARY

//1. Initialize windowStart and windowEnd at the 0th index

//2. Add value in window to windowSum

//3. Is value greater than or equal to s?
    //if YES:
        //A. Capture length of window in minLengthSoFar (if it is smaller than the current minLengthSoFar)
        //B. Shrink sliding window by decrementing windowStart
        //C. Repeat from Step 3
    //if NO:
        //A. Grow sliding window to next element by incrementing windowEnd
        //B. Repeat from Step 3.


function smallestContiguousSubArr(arr, s) {
    let windowStart = 0,
        windowSum = 0,
        minLengthSoFar = Infinity;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) { 
        //grow the window
        windowSum += arr[windowEnd]

        //is windowSum >= sum...?
        //if not, continue iterating, and grow the window.

        //if yes, shrink the window (until windowSum < s again)
        while (windowSum >= s) {
            //shrink he window, decrement windowStart, remove that first element in window from new shrunken window.

            let currentWindowLength = windowEnd - windowStart + 1 // + 1 because these are indeces
            minLengthSoFar = Math.min(minLengthSoFar, currentWindowLength) // compares these two and returns the one that is smaller.
            windowSum -= arr[windowStart]
            windowStart++ 
        }
    }
    if (minLengthSoFar === Infinity) {
        return 0
    }

    return minLengthSoFar
}

console.log(smallestContiguousSubArr([1,3,2,2,4,5]), 6)
console.log(smallestContiguousSubArr([2,1,5,2,8], 7)) // expect 8