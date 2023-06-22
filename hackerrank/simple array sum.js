function simpleArraySum(ar) {
    // Write your code here
    let sum = 0
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i]
    }
    return sum;
}

console.log(simpleArraySum([1,2,3,4,10,11]))
//expected: 31, logged: 31