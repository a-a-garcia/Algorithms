// the first of the three elementary sorts

//bubble sort works by "bubbling up" the largest number, one by one with loops.
// not very efficient. lots of comparisons.

// O(n^2) time - VERY BAD
// O(1) space - BEST

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// time - O(n^2) very bad.
// space - O(1) best
function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j+1]) {
                //swap numbers
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

bubbleSort(numbers)
console.log(numbers)