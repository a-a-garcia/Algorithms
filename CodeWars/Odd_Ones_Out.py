'''The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!

Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
In the above example:

the number 1 appears twice
the number 2 appears once
the number 3 appears three times
2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]*/
'''


def odd_ones_out(numbers):
    # Your code
    # an empty dictionary to track the number of occurences of each number
    counts = {}

    # iterate through the numbers list and update the dictionary.
    for num in numbers:
        if num in counts:
            counts[num] += 1
        else:
            counts[num] = 1

    # iterate over the dictionary and remove numbers that occur an odd amount of times.
    for num, count in counts.items():
        if count % 2 == 1:


print(odd_ones_out)
