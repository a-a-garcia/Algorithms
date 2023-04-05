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
            return true;
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

console.log(isPairSum(arr, arrSize, valueDesired));
console.log(isPairSum(arr2, arrSize, valueDesired2));
