# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.


def find_short(s):
    string_as_list = s.split()
    shortest_word = string_as_list[0]
    for word in string_as_list:
        if len(word) < len(shortest_word):
            shortest_word = word
    l = len(shortest_word)
    print("the length of the shortest word is")
    print(l)
    return l  # l: shortest word length


find_short("turns out random test cases are easier than writing out basic ones")
find_short("lets talk about javascript the best language")
