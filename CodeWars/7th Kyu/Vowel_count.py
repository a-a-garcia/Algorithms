'''Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

'''

def get_count(sentence):
    vowel_counter = 0
    vowels = 'aeiou'
    for letter in sentence:
        for letter2 in vowels:
            if letter == letter2:
                vowel_counter += 1
    print(vowel_counter)
    return vowel_counter

get_count('aeiou')
get_count('How many vowels are in this sentence?')