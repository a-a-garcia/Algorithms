//example problem - find the max subArray sum (of size 3)

// let arr = [5, 1, 3, 2, 11, 5, 7, 8];
// let subArray = 3; // the number of subsequent items in the array you will be adding together

//BRUTE FORCE APPROACH

// let currentSum = 0;
// let maxSum = 0;

//to start, add first 3 items of the array, 

// currentSum = arr[0] + arr[1] + arr[2]; // = 9
// maxSum = currentSum //because this is the highest number we've seen SO FAR

//then we move onto the next index in the array, so

// currentSum = arr[1] + arr[2] + arr[3]; // = 6
//because 6 < 9, we don't update maxSum

//...............and so on and so forth. 

//SLIDING WINDOW TECHNIQUE

//The process is almost the same. instead however, when we move from the first calculation of currentSum to the second calculation of currentSum, we SUBTRACT that arr[0], and add arr[3], all on one line.

//LETS CODE

function maxSubArraySum(arr, sizeOfSubArr) {
    if(sizeOfSubArr < 0 || sizeOfSubArr > arr.length) {
        return null
    }; //making sure we put usable values in the function

    let currentSum = 0;
    let maxSumSeen = -Infinity //we don't want this to be zero, in case we have negative numbers in the array.

    for (let i =0; i < arr.length; i++) {

        currentSum += arr[i]; //we don't want to traverse the entire array. so we write the below if 

        if (i >= sizeOfSubArr - 1) { // initial sizeOfSubArr is going to be 2 (3-1). this loop will not run until i = 2, which ensures that the first 3 numbers of the array will add together and be the currentSum. once i =2, this code executes continuously.

            maxSumSeen = Math.max(currentSum, maxSumSeen) //Math.max compares the two, and returns the one with the bigger value. The first time it runs, maxSumSeen will be 6, because 6 > -Infinity

            currentSum -= arr[i - (sizeOfSubArr - 1)] //this is where window sliding works! We want to subtract what's at index 0,1,2 and so on when we are continuing to loop. (if we're at i = 2, 2 - (3-1) = 0.)
        }
    }
    return maxSumSeen
}

const arr1 = [1, 2, 3, 5, 4, 8, 6, 2]

console.log(maxSubArraySum(arr1, 3));
//expect 18; output 18


//https://www.youtube.com/watch?v=BM0mhAlvyQc&list=PLxQ8cCJ6LyOYCas1Ln-L8kCBquxw20ljC&index=1

//What is the sliding window pattern?