/*Two pointers is a technique typically used for searching pairs in a sorted array.*/

/*Given a sorted Array A (sorted in ascending order), having N integers, find if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.*/

/* ILLUSTRATION:

A[] = {10, 20, 35, 50, 75, 80}
X = =70
i = 0
j = 5

A[i] + A[j] = 10 + 80 = 90
Since A[i] + A[j] > X, j--
i = 0
j = 4

A[i] + A[j] = 10 + 75 = 85
Since A[i] + A[j] > X, j--
i = 0
j = 3

A[i] + A[j] = 10 + 50 = 60
Since A[i] + A[j] < X, i++
i = 1
j = 3
m
A[i] + A[j] = 20 + 50 = 70
Thus this signifies that Pair is Found.
*/

/* 
Let us do discuss the working of two pointer algorithm in brief which is as follows. 
The algorithm basically uses the fact that the input array is sorted. We start the sum of extreme values 
(smallest and largest) and conditionally move both pointers. 
We move left pointer ‘i’ when the sum of A[i] and A[j] is less than X. 
We do not miss any pair because the sum is already smaller than X. 
Same logic applies for right pointer j. */

/*
Let us do discuss the working of two pointer algorithm in brief which is as follows. 
The algorithm basically uses the fact that the input array is sorted. 
We start the sum of extreme values (smallest and largest) and conditionally move both pointers. 
We move left pointer ‘i’ when the sum of A[i] and A[j] is less than X. 
We do not miss any pair because the sum is already smaller than X.
Same logic applies for right pointer j.
*/
function isPairSum(A, N, X) {
    //first pointer
    let i = 0;
    //second pointer
    let j = N - 1

    //traversing the array
    while(i < j) {
        //if we find a pair
        if (A[i] + A[j] == X) {
            // return true // This lets us know there are two numbers in the array that add up to the target, but doesn't tell us where.
            return [A[i], A[j]]; // this returns an array that tells us where in the array do the two numbers add up to the target.
        } 
        /*If sum of elements at the current pointers
        is LESS, we move towards higher values by doing i++
        */
        else if (A[i] + A[j] < X){
            i++
        }
        /*If sum of elements at current pointers 
        is MORE, we move towards lower values by doing j--
        */
        else {
            j--
        } 
    }
    return false;
}

//Driver code

//array declaration
let arr = [2, 3, 5, 8, 9, 10, 11];
let valueDesired = 17;
let arrSize = arr.length;

let arr2 = [10, 23, 43, 59, 66, 1000];
let valueDesired2 = 123;

// console.log(isPairSum(arr, arrSize, valueDesired));
// console.log(isPairSum(arr2, arrSize, valueDesired2));


//https://www.youtube.com/watch?v=8XHE3nzjIOA video notes

//In many problems involving arrays, or linked lists, where you need to find a set of elements that fulfill certain constraints, you can use the TWO POINTERS TECHNIQUE to avoid looping over the array multiple times.

//Because we use two pointers, we are able to process two elements per loop instead of just one. 

//Common patterns are:

//2 pointers, each starting from the beginning and end until they both meet.

//1 pointer, moving at a slow pace, while other pointer moves at 2x the speed.

//Let's focus on #1.

//we want to AVOID doing 0(n^2) operations because they use unnecessary computing power - we want 0(n) operations.

//GIVEN AN ARRAY OF SORTED NUMBERS, AND A TARGET SUM, FIND A PAIR IN THE ARRAY, WHOSE SUM IS EQUAL TO THE GIVEN TARGET.

//BLIND-ISH ATTEMPT 
arr = [1,6,8,9,10]
target = 14;

function twoPointer() {
    let start = arr[0];
    let end = arr[arr.length -1]
    let answerIndex1 = 0 
    let answerIndex2 = 0

    for (let i = 0; i <arr.length; i++) {
        if (start + end == target) {
            answerIndex1 = i;
        } else if (start + end < target) {
            start = arr[0 + 1]
        }
    }

    for (let j = arr.length -1; j > 0; j--) {
        if (start + end == target) {
            answerIndex2 = j;
        } else if (start + end > target) {
            end = arr[arr.length - 1 - 1]
        }
    }

    if (start + end == target) {
        return [arr[answerIndex1], arr[answerIndex2]]// return THIS if you want the actual numbers that add up to the target
        return [answerIndex1, answerIndex2] // return THIS if you want the indexes of the numbers that add up to the target.
    } else {
        return null
    }
}



console.log(twoPointer(arr, target));
//technically, this works, but not in the way that I want it to.
//this is because it looks like answerIndex1 is iterating all the way to 5, if i = 5 when the function is called.
//& answerIndex2 is iterating all the way to 1.
// NEVERMIND DOESN'T WORK WITH TEST CASE 2

//VIDEO ATTEMPT:

function findPair(arr, targetSum) {
    let leftPointer = 0,
        rightPointer = arr.length - 1,
        pair = null

    //we want to get the element at each pointer, and add to get a pairSum.
    //is pairSum === targetSum? if yes, return it. 
    //is pairSum < targetSum? if yes, increment leftPointer
    //is pairSum > targetSum? if yes, decrement rightPointer

    while(leftPointer !== rightPointer) {
        pairSum = arr[leftPointer] + arr[rightPointer];
        
        if (pairSum === targetSum) {
            pair = [arr[leftPointer], arr[rightPointer]]
            break; //once we find a pair, break out of the loop.
        } 

        else if (pairSum < targetSum) {
            leftPointer++
        }

        else if (pairSum > targetSum) {
            rightPointer--
        }
    }
    
    return pair
}

console.log(findPair([1,2,3,4,5], 7)) // [2, 5]
console.log(findPair([1,6,8,9,10], 14)) // [6, 8]
console.log(findPair([1,3,4,6,8,10], 12)) // [4, 8]
console.log(findPair([1,2,3,4,5], 10)) // null