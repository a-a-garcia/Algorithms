//PROBLEM:

//Given an array, find the average of all contiguous subarrays of size "K".

let arr = [1, 2, 3, 4, 5]
let k = 3

//answer would be [2, 3, 4].

//If you don't know how to solve a problem right away, brute force it, then optimize from there.

//Naive Approach

[(1 + 2 + 3) / 3, (2 + 3 + 4) / 3, (3 + 4 + 5) / 3]

//time complexity would be big On*k
//BECAUSE for every single element in the array, we're going to have to loop through K elements for the sub array EACH time.
// for 1 we're looping over 123...2 , 234... 3, 345... n*k 
//NOT good.

function avg_sub_arrays_naive(arr, k) {
    const averages = []

    for (let i = 0; i <= arr.length - k; i++) {
        let sum = 0
        for (let j = 0; j < k; j++) { //wherever we are in i, we want to keep looping for k intergers after i
            sum += arr[i + j]
        }
        averages.push(sum / k);
    }
    return averages
}

//sliding window
//we just want to loop over the elements once.
function avg_sub_arrays(arr, k) {
    const averages = [];
    let windowStart = 0, windowSum = 0; //the windowSum at any given point.

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]
        if (windowEnd >= k - 1) { //once we have our window of size K, we want to... K is a size, windowEnd is an index. so it's k - 1
            // 1) add the averageof the current window and push it to averages.
            averages.push(windowSum / k)
            
            // 3) subtract the integer at the windowStart from the windowSum
            windowSum -= arr[windowStart];

            // 3) move the window start one spot.
            windowStart++;
            
            // both 2 & 3 is 'moving the window'
        }
    }
    return averages
}

function avg_sub_arrays(arr, k) {
    const averages = [];
    let windowStart = 0, windowSum = 0; //the windowSum at any given point.

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]
        if (windowEnd >= k - 1) { 
            averages.push(windowSum / k)
            
            windowSum -= arr[windowStart];

            windowStart++;
            
        }
    }
    return averages
}


console.log(avg_sub_arrays([1,2,3,4,5], 3)); 
//expect [2,3,4]
console.log(avg_sub_arrays([1,3,2,6,-1,4,1,8,2], 5));
// expect [2.2,2.8,2.4,3.6,2.8]