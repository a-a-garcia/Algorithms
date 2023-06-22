function factorial(num) { // setup is almost the same as sigma.js, except you must start the counter and i at 1 because 0 * 0 (or anything) is equal to 0.
    let counter = 1
    for (let i = 1; i <= num; i++) {
        counter *= i
    }
    return counter;
}

console.log(factorial(3));
console.log(factorial(5));
