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

function add_integers(a,b) {
    if (a == b) {
        return a;
    } else if (a < b) {
        let sum = 0
        for (let i = a; i <= b; i++) {
            sum += i
        }
        return sum
    } else {
        let sum = 0;
        for (let i = b; i<= a; i++) {
            sum += i
        }
        return sum
    }
}


// console.log(add_integers(3,1))


//  2)
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//  Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// def checker(list, value):
//     for thing in list:
//         if thing == value
//     return true

function check_if_contains(arr, x) {
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] == x) {
            return true
        } 
    }
    return false
}

console.log(check_if_contains(([66, "codewars", 11, "alex loves pushups"], "alex loves pushups")))

// test_data = [
// ([66, "codewars", 11, "alex loves pushups"], "alex loves pushups"),
// ([78, 117, 110, 99, 104, 117, 107, 115], 8),
// (["when's", "the", "next", "Katathon?", 9, 7], "Katathon?")]




// # 3)
// # Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// # [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function multiply_values(arr) {
    let result = 1
    for (let i = 1; i <= arr.length; i++) {
        result *= i
    }
    return result
}

// console.log(multiply_values([1,2,3,4]))

// # 4)
// # Build a function that returns an array of integers from n to 1 where n>0.
// # Example : n=5 --> [5,4,3,2,1]

function countdown_array(num) {
    let result_arr = [];
    for (i = num; i > 0; i--) {
        result_arr.push(i)
    }
    return result_arr
}

// console.log(countdown_array(5))

// Algo 1
// function get_sum(a, b){
//     if(a==b){return a*2}
//     if( b<a ){ [a,b] = [b,a]}
//     let sum = 0
//     for( a ; a<=b; a++){
//         sum += a
//     }
//     return sum
// }
// console.log(get_sum(1,3))
// console.log(get_sum(3,1))
// console.log(get_sum(5,5))


// Algo 2
// const find_x_in_a = (a, x) => {
//     for(let i = 0; i<x.length; i++){
//         if(a[i] == x){return true}
//     }
//     return false
// }

// console.log(find_x_in_a([66, "codewars", 11, "alex loves pushups"], "alex loves pushups"))
// console.log(find_x_in_a([78, 117, 110, 99, 104, 117, 107, 115], 8))