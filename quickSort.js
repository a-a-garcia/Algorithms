// function quickSort(array) {
//     //must always have an edge case with a recursive function - when the function should stop
//     if (array.length === 1) {
//         return array
//     }

//     const pivot = array[array.length - 1];

//     const leftArr = [];

//     const rightArr = [];

//     for (let i = 0; i < array.length - 1; i++) {
//         if (array[i] < pivot) {
//             leftArr.push(array[i])
//         } else {
//             rightArr.push(array[i])
//         }
//     }

//     if (leftArr.length > 0 && rightArr.length > 0) {
//         return [...quickSort(leftArr) , pivot, ...quickSort(rightArr)];
//     } else if (leftArr.length > 0) {
//         return [...quickSort(leftArr), pivot]
//     } else {
//         return [pivot, ...quickSort(rightArr)]
//     }
// }

// // note -  quicksort returns an array. when combined with the spread operator,...quickSort(leftArr) essentially translates [1,2,3] into 1,2,3 

// //test array
// const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

// console.log(quickSort(arr))

// REFACTORED CODE BELOW
function quickSort(array) {
    // Must always have an edge case with a recursive function - when the function should stop
    // QuickSort can't be called on an empty array. However, if we say less than or equal to 1, we just return the array.
    if (array.length <= 1) {
        return array;
    }

    // Choose a pivot element. In this implementation, the pivot is the last element of the array.
    const pivot = array[array.length - 1];

    const leftArr = []; // Create an empty array for elements less than the pivot.
    const rightArr = []; // Create an empty array for elements greater than the pivot.

    // Iterate through all elements except the pivot.
    // We don't want to loop including the pivot, so we use slice.
    // Slice makes a shallow copy of an array. Two parameters: start index and end index.
    for (const el of array.slice(0, array.length - 1)) {
        // Use a ternary operator to decide whether to push the element into the leftArr or rightArr.
        // If the element is less than the pivot, push it into leftArr; otherwise, push it into rightArr.
        el < pivot ? leftArr.push(el) : rightArr.push(el);
    }
    
    // If leftArr or rightArr is empty, we'll still be fine.

    // Recursively sort the left and right sub-arrays and concatenate them with the pivot in between.
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Test array
const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

// Call quickSort with the test array and log the result.
console.log(quickSort(arr));