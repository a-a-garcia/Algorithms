function sigma(num) { // returns the sum of all positive integers from 1 to num.
    let counter = 0; 
    for (let i = 0; i <= num; i++) {
        counter += i;
    }
    return counter
}

console.log(sigma(3)) //expect: 6; output: 6
console.log(sigma(5)) //expect: 15; output: 15
