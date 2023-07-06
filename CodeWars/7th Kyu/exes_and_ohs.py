# Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

# Examples input/output:

# XO("ooxx") => true
# XO("xooxx") => false
# XO("ooxXm") => true
# XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
# XO("zzoo") => false


def xo(s):
    x_counter = 0
    o_counter = 0
    for letter in s:
        if letter.lower() == "x":
            x_counter += 1
        elif letter.lower() == "o":
            o_counter += 1
    if x_counter == 0 and o_counter == 0:
        return True
    if x_counter == o_counter:
        return True
    return False


print(xo("ooxx"))
print(xo("xooxx"))
print(xo("ooxXm"))
print(xo("zpzpzpp"))
print(xo("zzoo"))

# Slightly more efficient solution: 

# Simplify the code: Instead of using separate counters for 'x' and 'o', you can use a single counter to keep track of the difference between the counts. Initialize the counter to 0, and increment it for 'x' and decrement it for 'o'. By the end, if the counter is 0, it means the counts are equal.

# Avoid unnecessary comparisons: You don't need to check if both counters are 0 before returning True. If the counter is 0, it implies that there are no 'x' or 'o' characters in the string, so you can return True directly.

# Here's an updated version of your code:

# python
# Copy code
# def xo(s):
#     counter = 0
#     for letter in s:
#         if letter.lower() == "x":
#             counter += 1
#         elif letter.lower() == "o":
#             counter -= 1
#     return counter == 0