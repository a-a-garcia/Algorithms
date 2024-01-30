//Write two functions that finds the factorial of any number. One should use recursive, one should use a for loop

//both O(n)
//recursive version
function findFactorialRecursive(number) {
    if (number === 2) {
        return 2
    }
    return number * findFactorialRecursive(number - 1);
}

//traditional for loop version
function findFactorialIterative(number) {
    let answer = 1;
    if (number === 2) {
        answer = 2;
    }
    for (let i = 2; i <= number; i++) {
        answer = answer * i
    } //why start at 2?
    //1 factorial is just 1.
    //and 2 factorial is just 2. (2 * 1)
    return answer
}

// findFactorialIterative(5)
console.log(findFactorialRecursive(5))

//ChatGPT explanation

// In the base case of the findFactorialRecursive function, when number is equal to 2, it returns 2. This is crucial because it stops the recursion and prevents an infinite loop.

// In the recursive case, when number is greater than 2, the function returns number * findFactorialRecursive(number - 1). Here's the flow:

// findFactorialRecursive(5) is called.
// It returns 5 * findFactorialRecursive(4).
// Now, findFactorialRecursive(4) is called.
// It returns 4 * findFactorialRecursive(3).
// This continues until findFactorialRecursive(2) is called.
// At this point, the base case is triggered, and it returns 2.
// Now, each function call "waits" for the result of the subsequent call. When findFactorialRecursive(2) returns 2, it goes back up the chain of calls. So, findFactorialRecursive(3) gets the result of 4 * 2, findFactorialRecursive(4) gets the result of 5 * (4 * 2), and so on.

// In the end, findFactorialRecursive(5) gets the result of 5 * (4 * (3 * (2))), which equals the factorial of 5 (5! = 120).

// So, it's not returning directly to the function "above" but rather aggregating results as it unwinds the recursive calls. Each level of the recursion multiplies its number with the result of the subsequent call until it reaches the base case.






