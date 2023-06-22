"""Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!"."""


def disemvowel(string_):
    vowels = 'aeiouAEIOU'
    result = []
    for letter in string_:
        if letter not in vowels:
            result.append(letter)
    return ''.join(result)


print(disemvowel("No offense but, your writing is among the worst I've ever read"))
