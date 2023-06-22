"""In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number."""


def high_and_low(numbers):
    # split the string into a list of individual strings
    number_strings = numbers.split()
    # turn string of numbers into integers, and push them into new iterable list
    int_list = []
    for number in number_strings:
        number = int(number)
        int_list.append(number)
    # use built in methods to find the highest and lowest vals in the list
    highest_num = str(max(int_list))
    lowest_num = str(min(int_list))

    return (f'{highest_num} {lowest_num}')


print(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9")
