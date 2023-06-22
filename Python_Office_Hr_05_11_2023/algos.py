
def checker(list, value):
    for thing in list:
        if thing == value:
            return True
    return False




print(checker([66, "codewars", 11, "alex loves pushups"], "alex loves pushups"))
print(checker([78, 117, 110, 99, 104, 117, 107, 115], 8))