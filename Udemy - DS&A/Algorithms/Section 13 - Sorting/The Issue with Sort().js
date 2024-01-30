const letters = ['a', 'b', 'z', 'e', 'r', 'b'];
const basket = [2, 65, 34, 2, 1, 7, 8];

console.log(basket.sort())
letters.sort();

//you must understand your sorting methods if you're using built in.
//basket.sort() will not sort it properly
//.sort() in JS transforms each number into a string and translates that string from unicode

//localeCompare()