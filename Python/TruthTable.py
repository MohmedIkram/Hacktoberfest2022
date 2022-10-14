# author: Lea Lang
# class: CS 2010
# date 4/18/2021
# notes: print the truthtable for NOT, AND, and OR

def NOT(a):
    return not a
    OR()

def AND (a, b):

    if a == 1 and b == 1:
        return True
        OR()

    else:
        return False

def OR(a, b):
    if a == 1 or b ==1:
        return True
    else:
        return False

print("---------------------------")
print("AND Truth Table")
print(" A = False, B = False | A AND B =",AND(False,False))
print(" A = False, B = True | A AND B =",AND(False,True))
print(" A = True, B = False | A AND B =",AND(True,False))
print(" A = True, B = True | A AND B =",AND(True,True))

print("---------------------------")
print("OR Truth Table")
print(" A = False, B = False | A OR B =",OR(False,False))
print(" A = False, B = True | A OR B =",OR(False,True))
print(" A = True, B = False | A OR B =",OR(True,False))
print(" A = True, B = True | A OR B =",OR(True,True))

print("---------------------------")
print("NOT Truth Table")
print(" A = False | A NOT =",NOT(False))
print(" A = True, | A NOT =",NOT(True))
