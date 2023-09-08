// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    // Program Me
    let bits = 0
    let binary = n.toString(2)
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") {
            bits++
        }
    }
    return bits
};

console.log(countBits(1234))

//Note on time +space complexity
// Your solution has a time complexity of O(log₂(n)), which is logarithmic time complexity.

// The reason for this logarithmic time complexity is because the length of the binary representation of an integer n grows logarithmically with n. In base-2 (binary), the number of digits needed to represent a decimal number n is roughly proportional to log₂(n). As n gets larger, the binary length increases, but not linearly or exponentially like some other operations; instead, it grows at a logarithmic rate.

// So, when you iterate through the binary representation of n, you are effectively performing a logarithmic number of operations relative to the size of n, which is why the time complexity is O(log₂(n)).


// The space complexity of your solution is O(log₂(n)) as well.

// In your solution, you create a binary string representation of the input integer n using n.toString(2). The length of this binary string is roughly proportional to log₂(n) because it represents n in base-2 (binary).

// Therefore, the space required to store this binary string is O(log₂(n)). Other variables in your solution, such as bits, are constant in size and do not depend on the size of n, so they do not significantly contribute to the space complexity.

// In summary, the primary factor contributing to the space complexity is the binary string representation of n, and it grows logarithmically with the input n, resulting in a space complexity of O(log₂(n)).




