/* 
#1 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// function solution(number){
//     sum = 0;
//     for (let i = number - 1; i >= 0; i--) {
//         if (i % 3 == 0) {
//             sum += i
//         } else if (i % 5 == 0) {
//             sum += i
//         }
//     }
//     if (sum <= 0) {
//         sum = 0
//     }
//     return sum;
// }


// console.log(solution(10))


/*#2*/

/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

// function getCount(sentence) {
//     sentence = sentence.toLowerCase();
//     let vowel_counter = 0;
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let i = 0; i < sentence.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if (sentence[i] == vowels[j]) {
//                 vowel_counter += 1
//             }
//         }
//     }
//     return(vowel_counter)
// }

// console.log(getCount('There are 11 vowels in this sentence'))

/*3
You're given a set of numbers, as a string. They are either in ascending order, or in random order. You need to write an algorithm that will...
1) return the numbers in descending order. they must be returned as they came in (as a string.)
2) instead of returning the numbers in descending order, how could you refactor the code to return just the highest and lowest number?
*/

function highAndLow(numbers){
    numbers = numbers.split(' ')
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (Number(numbers[i]) < Number(numbers[j])) {
                let temp = numbers[i]
                numbers[i] = numbers[j]
                numbers[j] = temp
            }
        }
    }
    //using algorithm we made to return the numbers in DESCENDING order
    // return numbers.join(' ')
    //using the algorithm we made to solve another problem "return the highest and lowest numbers in the given nums"
    let highestNum = numbers[0];
    let lowestNum = numbers[numbers.length - 1];
    let result = [highestNum, lowestNum].join(' ')
    return result
}

console.log(highAndLow("8 7 42 4 4 3 0 0 -9 -5 -4 -1"));