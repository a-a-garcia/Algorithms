//accepts a paramenter, cents, then computes how to represent that amount with the smallest number of coins.
function generateCoinChange(cents) {
    console.log(`Your change is 0.0${cents}.`)

    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    for (let i = 0; i <= cents; i++) {
        if (cents == 3) {
            pennies = 3
        }
        else if (cents == 4) {
            pennies = 4
        }
        else if (cents % 25 === 0) {
            quarters++;
            cents -= 25;
        } else if (cents % 10 === 0) {
            dimes++
            cents -= 10;
        } else if (cents % 5 === 0) {
            nickels++
            cents -= 5;
        } else {
            pennies++
            cents -= 1;
        }
    }
    return console.log(`Dispensing coins... quarter(s): ${quarters}, dime(s): ${dimes}, nickel(s): ${nickels}, pennies: ${pennies}.`)
}

//EDGE CASES... without the first two if statements, the code gives incorrect ouput.
generateCoinChange(3);// w/o first if stmt.. it's giving me pennies: 2 for some reason....? should be pennies 3.
generateCoinChange(4)// w/o second if stmt... it gives pennies: 3 when it should give pennies: 4
generateCoinChange(99)
