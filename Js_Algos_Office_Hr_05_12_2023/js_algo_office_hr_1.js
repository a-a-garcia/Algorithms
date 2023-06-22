// # 1)
// # Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// # Note: a and b are not ordered!

// # Examples (a, b) --> output (explanation)
// # (1, 0) --> 1 (1 + 0 = 1)
// # (1, 4) --> 10 (1 + 2 + 3 + 4 = 10)
// # (0, 1) --> 1 (0 + 1 = 1)
// # (1, 1) --> 2 (2 since both are same)
// # (-1, 0) --> -1 (-1 + 0 = -1)
// # (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// need a for loop
// need a function

function sum_of_all(a, b) {
    if (a == b || b == a) {
        return a
    }
    sum = 0
    if (a > b) {
        for (let i = b; i <= a; i++) {
            sum += i
        }
    } else {
        for (let i = a; i <= b; i++) {
            sum += i
        }
    }
    return sum
}

console.log(sum_of_all(-1, 2))



//  2)
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//  Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

/*
need function
need for loop traverse 
need if statement

*/

function check_for_value(arr, value) {
    for (let i = 0; i <= arr.length; i++) {
        if (value == arr[i]) {
            return true
        }
    }
    return false
}

const find_x_in_array = (arr, x) => {
    for(index in arr) {
        if(arr[index] == x){
            return true}
        }
    return false
}

console.log(find_x_in_array([66, "codewars", 11, "alex loves pushups"], "alex loves pushups"))
console.log(check_for_value([78, 117, 110, 99, 104, 117, 107, 115], 8))
console.log(check_for_value(["when's", "the", "next", "Katathon?", 9, 7], "Katathon?"))

// test_data = [
// ([66, "codewars", 11, "alex loves pushups"], "alex loves pushups"),
// ([78, 117, 110, 99, 104, 117, 107, 115], 8),
// (["when's", "the", "next", "Katathon?", 9, 7], "Katathon?")]


// # 3)
// # Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// # [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

/* do something similar to first algo except multiplying.
need a for loop & function*/

function multiply_array(arr) {
    let result = 1;

    for (let i = 1; i <= arr.length; i++) {
        result *= arr[i - 1]
    }

    return result
}

console.log(multiply_array([2,3,4,5]))





// # 4)
// # Build a function that returns an array of integers from n to 1 where n>0.
// # Example : n=5 --> [5,4,3,2,1]


/*
need a function & for loop.
function take in a number.
*/

function countdown_array(num) {
    let result_arr = []
    for (let i = num; i > 0; i--) {
        result_arr.push(i)
    }
    return result_arr
} 

console.log(countdown_array(100))