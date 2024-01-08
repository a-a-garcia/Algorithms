function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good';
    }
    return str.split('').reverse().join('')
    const strAsArr = str.split('');
    // let result = ''
    // for (let i = strAsArr.length - 1; i >= 0; i-- ) {
    //     result += strAsArr[i]
    // }
    // return result
}

console.log(reverse('Hi my name is Anthony'))