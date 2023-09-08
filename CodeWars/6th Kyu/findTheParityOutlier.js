// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    //first, need to decipher whether the majority of the numbers are even or odd
    //two counters, one for even one for odd
    //loop - if either counter is > 1, then we know the majority of the numbers are that counter
    integers.filter(integer => {
        if (integer )
    })
  }

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])