# A list containg positive integers is given and you have to return true if the numbers of the array taken any number of times sums up to a given target sum

def canSum(tSum,l,d = dict()):
    if tSum in d:
        return d[tSum]
    
    if tSum == 0:
        return True
    if tSum<0:
        return False

    for i in l:
        x = tSum - i
        if (canSum(x,l)==True):
            d[x] = True
            return True
    d[tSum] = False
    return False


print(canSum(7,[2,3]))
print(canSum(300,[7,14]))