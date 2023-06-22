"""Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

"""

"""
loop over the number,
compare each iteration to the next, 

concatenate or create the result string at the end, after re-ordering.
"""


def rearrange_descending(number):
    # define an empty list, that will eventually be looped over for comparison
    number_as_list = []
    # turn number into a string
    number = str(number)
    # loop over this new string, turn the elements back to numbers, and append them to empty list.
    for i in number:
        i = int(i)
        number_as_list.append(i)

    for i in range(len(number_as_list)):
        for j in range(len(number_as_list) - 1 - i):
            if number_as_list[j] < number_as_list[j + 1]:
                temp = number_as_list[j]
                number_as_list[j] = number_as_list[j + 1]
                number_as_list[j + 1] = temp

    return int(''.join(map(str, number_as_list)))


print(rearrange_descending(42145))

'''EXPLANATION OF THE BUBBLE SORT ALGO note- bubble sort is inefficient for large data sets.

Certainly, let's use the example list number_as_list = [4, 2, 1, 4, 5] to illustrate how the Bubble Sort algorithm works:

go
Copy code
for i in range(len(number_as_list)):
The outer loop initializes i to 0 and iterates over the range of indices in the list, which is [0, 1, 2, 3, 4]. On the first iteration, i is 0.

go
Copy code
    for j in range(len(number_as_list)-1-i):
The inner loop initializes j to 0 and iterates over the range of indices in the list up to len(number_as_list) - 1 - i, which is 4 on the first iteration. This means that the inner loop only compares elements up to the second-to-last element on the first pass. On the first iteration, j is 0 and the inner loop iterates over the indices [0, 1, 2, 3].

less
Copy code
        if number_as_list[j] < number_as_list[j+1]:
            temp = number_as_list[j]
            number_as_list[j] = number_as_list[j+1]
            number_as_list[j+1] = temp
At each iteration of the inner loop, the adjacent elements number_as_list[j] and number_as_list[j+1] are compared. If number_as_list[j] is less than number_as_list[j+1], the two elements are swapped using a temporary variable temp. On the first iteration of the inner loop, the first comparison is between number_as_list[0] and number_as_list[1], which are 4 and 2 respectively. Since 4 is greater than 2, the elements are swapped, resulting in the list [2, 4, 1, 4, 5].

The inner loop then proceeds to compare the next pair of adjacent elements, which are number_as_list[1] and number_as_list[2], which are 4 and 1 respectively. Since 4 is greater than 1, the elements are swapped, resulting in the list [2, 1, 4, 4, 5]. The inner loop then proceeds to compare number_as_list[2] and number_as_list[3], which are 4 and 4 respectively. Since they are equal, no swap is performed.

python
Copy code
    # convert the list back to a number and return it
    return int(''.join(map(str, number_as_list)))
After the inner loop completes, the outer loop increments i by 1 and the process repeats with a shorter inner loop. On the second iteration of the outer loop, i is 1 and the inner loop only iterates over the indices [0, 1, 2]. The comparisons and swaps proceed in a similar manner until the entire list is sorted in descending order. Finally, the sorted list [5, 4, 4, 2, 1] is concatenated into a string, which is then converted back to an integer and returned by the function.'''
