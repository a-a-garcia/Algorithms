# This time no story, no theory. The examples below show you how to write function accum:

# Examples:
# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"
# The parameter of accum is a string which includes only letters from a..z and A..Z.

def accum(s):
    result = []
    if not s.isalpha():
        return 'string must be all letters.'
    
    for i in range(len(s)):
        letter = s[i]
        result.append(letter.upper() + letter.lower() * i)

    return '-'.join(result)


print(accum("abcd"))