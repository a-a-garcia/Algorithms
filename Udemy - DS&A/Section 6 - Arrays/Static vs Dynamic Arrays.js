// Whats the difference?

// static arrays
// * fixed in size, need to specify how many elements it will contain ahead of time.


// dynamic arrays
// * allow us to copy and rebuild an array at a new location with more memory.
// * expand as you add more elements.

// In JavaScript, arrays are dynamic by default.
// In C++ or Java, arrays are static by default.

// minor detail: append() can be O(n) in some cases, because javascript might have to copy the entire array to a new location in memory. this depends on the size of the array and the amount of memory available. IE: if the array is 4 items long, and you .push or .append, and the memory available is 4 items, then javascript will have to copy the entire array to a new location in memory. however, the amortized time complexity is still O(1) because this is a rare case.