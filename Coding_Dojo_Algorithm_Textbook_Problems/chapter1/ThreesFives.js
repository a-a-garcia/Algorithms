function threesFives() {
    let sum = 100;
    for (let i = 100; i <= 4000000; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            sum += 0
        } else if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    return sum;
    }
}

console.log(threesFives())

//don't actually know if this is correct..............

function betterThreesFives(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            sum += 0
        } else if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        } 
    }
    return sum;
}

console.log(betterThreesFives(1, 15)) // (incorrect) expected output = 60  wrong because i do not want it to add 15, which is divisible by both 3 and 5.
// after i fixed the function, by adding the first if statement, it no longer counted 15, so I think the function is correct.
console.log(betterThreesFives(100, 4000000));
console.log(betterThreesFives(1, 30)) // expect: 3 + 5 + 6 + 9 + 10 + 12 + 18 + 20 + 21 + 24 + 25 + 27 = 180; output: 180. so......... i think function is working as intended.

//for some reason the first function isnt working anymore????????????????
