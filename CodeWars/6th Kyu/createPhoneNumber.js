// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  let first = "";
  let second = "";
  let third = "";
  for (let i = 0; i < numbers.length; i++) {
    if (i < 3) {
      first += numbers[i]
    } else if (i < 6) {
      second += numbers[i]
    } else {
      third += numbers[i]
    }
  } 
  return `(${first}) ${second}-${third}`;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

//time and space complexities - 
//O(1) for each because n will always be 10.