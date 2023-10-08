//create a function that reverses a string.

//my soln
// function reverseString(str) {
//     console.log(`split operation:`, str.split(''))
//     console.log(`reverse operation:`, str.split('').reverse())
//     console.log(`join operation:`, str.split('').reverse().join(''))
//     return str.split('').reverse().join('')
// }

// console.log(reverseString('Hi My name is Andrei')) //should return 
//'ierdnA si eman yM iH'

//Course soln

function reverseString(str) {
    //check input

    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good.';
    } // if string is empty, or only has 1 or less letters or isn't a string...

    //convert str to arr

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]); //don't necessarily need to use .split('') here, though you could.
    }
    console.log(backwards)

    return backwards.join('') //or .toString(); as we know the result needs to be a string.
}

console.log(reverseString('Hi My name is Andrei')) //should return 
//'ierdnA si eman yM iH'

//ES6, arrow syntax
const reverse3 = str => str.split('').reverse().join('')

//spread operator
const reverse4 = str => [...str].reverse().join('')