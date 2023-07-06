# An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

# Example: (Input --> Output)

# "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

# isIsogram "Dermatoglyphics" = true
# isIsogram "moose" = false
# isIsogram "aba" = false


def is_isogram(string):
    string = string.lower()

    encountered_letters = set()

    for letter in string:
        if letter in encountered_letters:
            return False
        encountered_letters.add(letter)

    return True


print(is_isogram("Dermatoglyphics"))
print(is_isogram("moose"))


# To determine whether a given string is an isogram, you can take the following approach:

# Convert the string to lowercase to ignore letter case.
# Initialize an empty set to keep track of the letters encountered.
# Iterate over each letter in the string.
# If the letter is already in the set, it means it's a repeating letter, so return False as it is not an isogram.
# If the letter is not in the set, add it to the set.
# After the loop finishes, return True as it is an isogram.
# Here's the updated code implementing the above algorithm:

# python
# Copy code
# def is_isogram(string):
#     string = string.lower()  # Convert to lowercase

#     encountered_letters = set()

#     for letter in string:
#         if letter in encountered_letters:
#             return False
#         encountered_letters.add(letter)

#     return True
# Now, let's test the function with the provided examples:

# python
# Copy code
# print(is_isogram("Dermatoglyphics"))  # True
# print(is_isogram("moose"))  # False
# print(is_isogram("aba"))  # False
# The output will be:

# graphql
# Copy code
# True
# False
# False
# The function correctly determines whether the given strings are isograms or not, considering case insensitivity.


# User
# what does set() do ? explain in detail
# ChatGPT
# In Python, a set is an unordered collection of unique elements. It is a built-in data type that can be used to store a collection of values, where each value is unique within the set. The set() function is used to create an empty set or convert other iterable objects, such as lists or strings, into a set.

# Here are some key characteristics and behaviors of sets in Python:

# Unique Elements: Sets only store unique elements. If you try to add a duplicate element to a set, it will be ignored, and the set will remain unchanged. This property makes sets useful when you want to keep track of a collection of distinct values.

# Unordered: Sets do not maintain any specific order for their elements. When iterating over a set or printing its contents, the order of the elements may vary. This is because sets are implemented using hash tables, which do not preserve the original order of insertion.

# Mutable: Sets are mutable, meaning you can add or remove elements from a set after it is created. You can use methods like add(), remove(), discard(), and clear() to modify the set.

# Mathematical Set Operations: Sets in Python support various mathematical set operations, such as union (|), intersection (&), difference (-), symmetric difference (^), and subset/superset checks (<=, >=). These operations make sets useful for tasks like finding common elements between sets, removing duplicates, or performing set-based computations.

# Now, let's see some examples to better understand the set() function:

# Creating an Empty Set:

# python
# Copy code
# empty_set = set()
# print(empty_set)  # Output: set()
# Converting a List to a Set:

# python
# Copy code
# my_list = [1, 2, 3, 3, 4, 4, 5]
# my_set = set(my_list)
# print(my_set)  # Output: {1, 2, 3, 4, 5}
# Converting a String to a Set (Unique Characters):

# python
# Copy code
# my_string = "Hello"
# my_set = set(my_string)
# print(my_set)  # Output: {'o', 'H', 'l', 'e'}
# In the case of the is_isogram() function, the set() function is used to create an empty set called encountered_letters. This set is used to keep track of the letters encountered while iterating over the string. By adding each letter to the set, we can quickly check if a letter has been encountered before, allowing us to determine if the string is an isogram.

# I hope this explanation clarifies the usage and significance of the set() function in Python.
