// Given a number N, return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144  ...
// the pattern of the sequnce is that each value is the sum of the previous 2 values, that means that for N=5 -> 2+3

function fibonacciIterative(n) { // O(n)
    let arr = [0,1]
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n]
}
console.log(fibonacciIterative(3));

// Exponential time complexity... O (2^n) - BAD!!! WORSE than quadratic time.
//means every additional element, we get an exponential increase in function calls
function fibonacciRecursive(n) { 
    //base case
    if (n < 2) {
        return n; 
    }
    //recursive case
    return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2)
}
console.log(fibonacciRecursive(8))

// we can use dynamic programming + memoization to turn it into O(n)