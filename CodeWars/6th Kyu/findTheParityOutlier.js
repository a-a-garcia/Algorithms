// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    //first, need to decipher whether the majority of the numbers are even or odd
    //two counters, one for even one for odd
    //loop - if either counter is > 1, then we know the majority of the numbers are that counter
    let oddCounter = 0;
    let evenCounter = 0;
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 == 0) {
        evenCounter++
        if (evenCounter > 1) {
          for (let j = 0; j <integers.length; j++) {
            if (integers[j] % 2 !== 0) {
              return integers[j]
            }
          }
        }
      } else if (integers[i] % 2 !== 0) {
        oddCounter++
        if (oddCounter > 1) {
          for (let j = 0; j <integers.length; j++) {
            if (integers[j] % 2 == 0) {
              return integers[j]
            }
        }
      }
    }
  }
}

//optimized solution
function findOutlier(integers) {
    // Create two arrays to store even and odd numbers
    const evenNumbers = [];
    const oddNumbers = [];

    // Iterate through the array and categorize numbers
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenNumbers.push(integers[i]);
        } else {
            oddNumbers.push(integers[i]);
        }
        
        // If we have enough numbers in either array, return the outlier
        if (evenNumbers.length > 1 && oddNumbers.length === 1) {
            return oddNumbers[0];
        } else if (oddNumbers.length > 1 && evenNumbers.length === 1) {
            return evenNumbers[0];
        }
    }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))