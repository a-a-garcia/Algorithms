// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    //...
    let distinctCounter = 0;
    let charCount = {}; // use an object instead of an array to store char counts

    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase()
        if (charCount[char]) {
            //if counter has been encountered already, increase counter
            if (charCount[char] === 1) {
                distinctCounter++
            }
            charCount[char]++
        } else { //else initialize the count at 1
            charCount[char] = 1;
        }
    }

    console.log(distinctCounter)
    console.log(distinctTracker)
}

  duplicateCount('indivisibility')