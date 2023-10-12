//return the first recurring character
// [2, 5, 1, 2, 3, 5, 1, 2, 4] 
//should return 2.

// [2, 3, 4, 5]
// should return undefined

const firstRecurringChar = (arr) => {
    if (arr === null || arr.length < 1) {
        return undefined
    } 

    let charsEncountered = new Set()

    for (let i = 0; i < arr.length; i++) {
        // console.log(`element at index ${i} : value ${arr[i]}`)
        // console.log(Object.keys(charsEncountered))
        if (arr[i] in charsEncountered) {
            return arr[i]
        } else {
            charsEncountered.add(arr[i])
        }
    }

    return undefined
} 

//A map may also be useful/usable because it won't allow duplicate keys.

function firstRecurringChar2(input){
    let map = {} //space complexity increase of from O(1) to O(n), but time complexity is no longer O(n^2)

    for (let i = 0; i < input.length; i++) {
        // console.log(map[input[i]])
        if (map[input[i]] !== undefined) { //because javascript has type coercion, 0 could give us something incorrect
            return input[i]
        } else {
            map[input[i]] = i
        }
        // console.log(map)
    }
    return undefined
}

console.log(firstRecurringChar2([2, 5, 1, 2, 3, 5, 1, 2, 4]))
// console.log(firstRecurringChar2([2, 1, 1, 2, 3, 5, 1, 2, 4]))
// console.log(firstRecurringChar2([2, 3, 4, 5]))