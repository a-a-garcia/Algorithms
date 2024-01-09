var shortestCompletingWord = function(licensePlate, words) {
    
    // Object to hold the shortest word that matches
    var match = {'found':false, 'word':''};
    
    // Char array to hold the upper case characters we want to match
    var licensePlateChars = licensePlate.toUpperCase().replace(/[^A-Z]/g, '').split('');
    
    words.forEach(function (word) {
        // if we already have a match make sure that the word we are checking is shorter
        if (!match.found || word.length < match.word.length) {
            var replaceWord = word.toUpperCase();
            
            // Loop over each character in the license plate and replace one at a time
            // the key here is that replace will only replace 1 S even if there are 2
            licensePlateChars.forEach(function (lChar) {
                replaceWord = replaceWord.replace(lChar, '');
            });
            
            // We know the word works if the length of the word minus 
            // the length of chars equals the length of the new word
            if (word.length - licensePlateChars.length === replaceWord.length) {
                match.found = true;
                match.word = word
            }
        }
    });
    
    return match.word;
};

//ALT soln

// var shortestCompletingWord = function(licensePlate, words) {
//     const targetLetters = licensePlate.toLowerCase().match(/[a-z]/g);
//     const targetCount = countLetters(targetLetters);

//     return words
//         .filter(word => isCompletingWord(word.toLowerCase(), targetCount))
//         .sort((a, b) => a.length - b.length)[0];
// };

// function countLetters(letters) {
//     const count = {};
//     letters.forEach(char => count[char] = (count[char] || 0) + 1);
//     return count;
// }

// function isCompletingWord(word, targetCount) {
//     const wordCount = countLetters(word.match(/[a-z]/g));
//     return Object.entries(targetCount).every(([char, count]) => wordCount[char] >= count);
// }

// // Example usage:
// console.log(shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"])); // Output: "steps"
// console.log(shortestCompletingWord("1s3 456", ["looks","pest","stew","show"])); // Output: "pest"
