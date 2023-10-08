
function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1
    let j = 1

    //check input
    if (arr1.length === 0 ) {
        return arr2
    } else if (arr2.length === 0) {
        return arr1
    }

    while (array1Item || array2Item) {
        console.log(array1Item, array2Item)
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = arr1[i]
            i++
        } else {
            mergedArray.push(array2Item)
            array2Item = arr2[j]
            j++
        }
    }
    // traditional for loop version
    // for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
    //     if (arr1[i] < arr2[j] || arr2[j] === undefined) {
    //         mergedArray.push(arr1[i]);
    //         i++;
    //     } else {
    //         mergedArray.push(arr2[j]);
    //         j++;
    //     }
    // }


    return mergedArray;
}
console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))
// result should be [0, 3, 4, 4, 6, 30, 31]