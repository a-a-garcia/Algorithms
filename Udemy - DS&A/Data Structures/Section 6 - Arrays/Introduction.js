//TIME COMPLEXITIES
// lookup/access O(1) constant
// push O(1) constant
// insert O(n) linear
// delete O(n) linear


const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of storage - 4 elements, 4 shelves.

strings[2] // O(1) go to the array called strings and grab the 4rd item.

// push
strings.push('e'); // O(1) not looping, just adding something at the end.

console.log(strings)

// pop
strings.pop(); // O(1) not looping, just removing something at the end.

console.log(strings)

// unshift - adds an item at the beginning of the array.
strings.unshift('x'); // O(n) looping, because we have to reassign the index of each item.

console.log(strings)


// splice - adds an item at the middle of the array.
strings.splice(2, 0, 'alien'); // O(n) looping, because we have to reassign the index of each item.
// 2 = index, 0 = how many items to remove, 'alien' = item to add.

console.log(strings)
