# Linear Search Algorithm in Python


def linearSearch(array, n, x):

    # This loop goes thru the array elements one by one
    for i in range(0, n):
        if (array[i] == x):
            return i
    return -1
#-1 means that element is not found

array = [2, 4, 0, 1, 9]
x = 1
n = len(array)
result = linearSearch(array, n, x)
if(result == -1):
    print("Element not found")
else:
    print("Element found at index: ", result)
    #hope you got to know about linearSearch this way :)