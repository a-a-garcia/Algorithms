
/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let diagonal1 = 0;
    let diagonal2 = 0;

    for (let row = 0; row < arr.length; row++) {
        diagonal1 += arr[row][row];
        diagonal2 += arr[row][arr.length - row -1];
    }

    return Math.abs(diagonal1 - diagonal2);
}

