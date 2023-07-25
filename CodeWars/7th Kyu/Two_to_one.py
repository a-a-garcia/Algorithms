# Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

# Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"

# a = "abcdefghijklmnopqrstuvwxyz"
# longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


def longest(s1, s2):
    # Step 1: Concatenate the two strings
    concatenated_string = s1 + s2

    # Step 2: Remove duplicate characters and create a set of distinct letters
    distinct_letters_set = set(concatenated_string)

    # Step 3: Sort the distinct letters and create the longest possible string
    longest_string = "".join(sorted(distinct_letters_set))

    return longest_string


longest(a, b)
