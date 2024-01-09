const firstReoccuringChar = (arr) => {
    const encountered = new Set();

    for (let i = 0; i < arr.length - 1; i++) {
        if (encountered.has(arr[i])) {
            return arr[i]
        } else {
            encountered.add(arr[i]);
        }
    }

    // arr.map((item) => {
    //     if (encountered.has(item)) {
    //         return item
    //     } else {
    //         encountered.add(item)
    //         console.log(encountered)
    //     }
    // })
}

const firstReoccuringChar2 = (arr) => {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] !== undefined) {
            return arr[i]
        } else {
            map[arr[i]] = i;
        }
        console.log(map)
    }
    return undefined;
}

console.log(firstReoccuringChar([2,5,1,2,3,5,1,2,4]))

// NOTE : my .map implementation kept returning undefined....

// The issue with using .map() in your code is related to how the return statement works within the .map() function. The return statement inside a .map() callback does not have the same effect as in a regular loop. The return value is used to create a new array, not to exit the loop or the function.

// If you want to use a higher-order function like .map(), you might consider using .find() or .some() instead. Here's an updated version of your code using .some():


// const firstReoccuringChar = (arr) => {
//     const encountered = new Set();

//     return arr.find((item) => {
//         if (encountered.has(item)) {
//             return true;
//         } else {
//             encountered.add(item);
//             return false;
//         }
//     });
// }

// console.log(firstReoccuringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// In this example, .find() will return the first element that satisfies the condition within the callback. If no element is found, it will return undefined, which is consistent with your function's behavior.

// Alternatively, you could use a regular for loop or a .forEach() loop for this task, as you initially attempted in the commented-out code. Either approach is valid. The .map() function, however, is more suitable for transforming each element in an array and creating a new array based on those transformations, rather than searching for a specific element.