
# Problem - given an array and a target number, write a function that returns true if the array contains two numbers that add up to the target number or false if no pair exists

# 1. Is the array sorted (in this case, we can assume it is).
# can we have negative inputs ? (yes)
# can we have null inputs?
# is the input size fixed?

# //Naive Solution
# The obvious brute force solution is to compare each element of the array with that element plus 1 with nested loops.

# def contains_pair_with_sum(arr, target):
#     for i in range(len(arr)):
#         for j in range(len(arr)):
#             if arr[i] + arr[j] == target:
#                 return True
#     return False

# print(contains_pair_with_sum([1,2,3,4,4], 8))

# This is not ideal because it uses nested for loops, resulting in O(n^2) or quadratic time complexity

# Better
def contains_pair_with_sum2(arr, target):
    my_set = set()
    for element in arr:
        if element in my_set:
            return True
        else:
            my_set.add(target - element)
    return False

print(contains_pair_with_sum2([], 8))

# a better solution that utilizes a set to keep track of what element is needed to create a pair that equals the target (in other words, the complement to each element as it continues). if we find it, return true, if not, we add the complement to the set. on each run of the loop we check the set to see if we have what we need to return true.

# So for instance, with our test input, our target is 8. 
# first run of the loop. element is 1. set is empty, so we go to the else - we add 7 to the set. 8 - 1.
# second run of the loop. element is 2. set has {7} in it. 2 doesn't exist in the set, so add 6 to the set. 8 - 2
# third run of the loop. element is 3. set has {7, 6} in it. 3 doesn't exist in the set, so add 5 to the set. 8 - 3 
# fourth run of the loop. element is 4. set has {7, 6, 5} in it. 4 doesn't exist in the set, so add 4 to the set 8 - 4.
# fifrth run of the loop. element is 4. set has {7, 6, 5, 4} in it. 4 does exist in the set, so we return true.

# How can we break this code?
# nulls? 
# no params?
# 0
# undefined?
# massive arrays?

# how coule we improve?
# To better organize the set we would create a separate dictionary and increment on each encounter of each element, though there's a memory cost involved with that. May not be necessary in the context of this problem.
# A two pointer approach could also be utilized for this problem but only if the array is sorted. otherwise we could also sort the array but that incurs a cost making the time complexity O(nlog(n)), which is of course worse than O(n)

# if array is huge, divide the array into smaller chunks.
# sort it
# apply the algo to the partitions
# store when the algo returns true on a partition
