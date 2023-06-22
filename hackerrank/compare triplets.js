'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    let alicePoints = 0;
    let bobPoints = 0;
    let scoreArr = []
    
    if (a[0] > b[0]) {
        alicePoints++
    } else if (a[0] < b[0]) {
        bobPoints++
    }
    
    if (a[1] > b[1]) {
        alicePoints++
    } else if (a[1] < b[1]) {
        bobPoints++
    }
    
    if (a[2] > b[2]) {
        alicePoints++
    } else if (a[2] < b[2]) {
        bobPoints++
    }
    
    scoreArr.push(alicePoints);
    scoreArr.push(bobPoints);
    return scoreArr;
}

// a = [5,6,7] b=[3,6,10] expected: [1,1] output: [1,1]
//There is probably a better way to do this, by maybe nesting for loops to compare the
//values in each array... visit this again.


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
