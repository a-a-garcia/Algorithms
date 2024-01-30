let counter = 0;

function inception() {
    console.log(counter)
    //base case
    if (counter > 3) {
        return 'done!';
    }
    //recursive case
    counter++
    return inception();
}

//1. Identify the base case
//2. Identify the recursive case
//3. Get closer and closer, and return when needed. Usually, you have 2 returns.

//you need to make sure to have 2 returns or else the base case won't bubble up and be properly returned.

console.log(inception())