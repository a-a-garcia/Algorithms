// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
    //TODO Have fun :)
    var result = "";
    var delimiter = " ";
    var splitString = string.split(delimiter);
    console.log(splitString)

    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i].length >= 5) {
            var reversedWord = splitString[i].split("").reverse().join("");
            result += reversedWord
        } else{
            result += splitString[i];
        }

        if (i < splitString.length - 1) {
            result += " ";
        }
    }

    return result;
}

console.log(spinWords("Hey fellow warriors"));

// FEW KEY TAKEAWAYS
// In JavaScript, if you want to reverse a string you must use string.split("").reverse().join("");
// .split() takes a delimiter. so you can pass in whatever you want the split condition to be. if its a space like " " then it will split a string after each word in the string.
