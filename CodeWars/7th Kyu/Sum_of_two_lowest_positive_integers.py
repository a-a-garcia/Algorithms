# Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

# For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

# [10, 343445353, 3453445, 3453545353453] should return 3453455.


def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0] + numbers[1]

#Other possible solution, that achieves a time complexity of O(n) instead of O(n log n), as it doesn't need to sort the entire array to achieve the goal.
# def sum_two_smallest_numbers(numbers):
#     assert len(numbers) >= 4, "Input array must have at least four positive integers."
#     assert all(num > 0 for num in numbers), "All elements in the array must be positive integers."
    
#     # Find the two smallest numbers without sorting the entire array
#     smallest = float('inf')
#     second_smallest = float('inf')
#     for num in numbers:
#         if num < smallest:
#             second_smallest = smallest
#             smallest = num
#         elif num < second_smallest:
#             second_smallest = num

#     return smallest + second_smallest

print(sum_two_smallest_numbers([10, 343445353, 3453445, 3453545353453]))
