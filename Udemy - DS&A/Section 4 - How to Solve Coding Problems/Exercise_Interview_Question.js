const array1 = ['a','b','c','x'];
const array2 = ['a','z','y','i'];

const bruteForce = (array1, array2) => {
    const encountered = new Set();
    
    for (let i = 0; i <= array1.length - 1; i++) {
        const item = array1[i];
        if (encountered.has(item)) {
            return true
        } else {
            encountered.add(item)
            console.log(encountered)
        }
    }

    for (let j = 0; j <= array2.length - 1; j++) {
        const item = array2[j];
        if (encountered.has(item)) {
            return true
        } else {
            encountered.add(item)
            console.log(encountered)
        }
    }

    return false
}


console.log(bruteForce(array1, array2))