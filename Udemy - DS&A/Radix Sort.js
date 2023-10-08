/*

Radix Sort is a sorting algorithm that does not make comparisons between elements. It exploits the fact that information about the size of a number is encoded in the number of digits. More digits means a bigger number.

Elements are distributed into different buckets based on the number of digits in each element. Elements with the same number of digits are placed in the same bucket. Elements are then sorted within each bucket. Buckets are then concatenated into one array.

The relative order of equal elements is preserved in the final result.

Radix sort is often used to sort numbers. It can also be used to sort strings that have the same length.

*/

/*
STEPS

1. Determine the Radix:

    Decide on the radix, which is typically the base of the number system you're sorting. For integers, the most common radix used is base 10, which is also known as the decimal system. For strings, the radix is typically the length of the longest string in the array.

2. Iterate through the Digits:

    Starting from the least significant digit (rightmost) to the most significat (leftmost) perform the following steps:

        a. Bucket Distribution: Create a set of buckets (usually one for each possible digit value, e.g., 0-9 for decimal radix). Distribute each element into one of these buckets based on the value of the current digit.

        b. Collect Elements: After distributing elements into buckets, collect them back in the original order by concatenating the contents of all buckets.

        c. Repeat: Repeat the above process for each digit until you have processed all digits (from least significant to most significant). After processing the most significant digit, you'll have a sorted array.

*/

/*

When to use Radix Sort??

Fixed-Length Integers: Radix sort is particularly efficient when sorting integers with a fixed number of digits, such as sorting a list of 32-bit or 64-bit integers.

String Sorting: Radix sort can be used to sort strings with fixed-length representations, such as sorting strings of equal length or strings padded to equal lengths.

Parallel Processing: Radix sort can be parallelized easily because you can distribute the elements into buckets independently, making it suitable for parallel computing environments.

Stable Sorting: If you need a stable sorting algorithm (one that preserves the relative order of equal elements), radix sort is a good choice.

*/

/*

When NOT to use Radix Sort??

However, radix sort may not be the best choice for sorting variable-length integers or strings, as it can become inefficient in such cases due to the need to handle different lengths. In such situations, other sorting algorithms like quicksort or merge sort may be more suitable.

*/

//TIME COMPLEXITY is O(nk) where n is the length of the array and k is the number of digits in the largest number. If k is constant, then the time complexity is O(n) (good). If k is not constant, then the time complexity is O(nlogn) (not as good).

//BASICALLY ONLY USEFUL WHEN ALL THE ELEMENTS IN THE ARRAY ARE THE SAME LENGTH. QUICKSORT, MERGESORT, HEAP SORT ARE MORE COMMONLY USED AND USEFUL WHEN THE ELEMENTS ARE NOT ALL THE SAME LENGTH.