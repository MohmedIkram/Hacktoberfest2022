def bubbleSort(arr):
    n = len(arr)
    
    for i in range(n-1):
 
        # Last i elements 
        for j in range(0, n-i-1):
 
            
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j + 1] :
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
 
# test
arr = [64, 34, 25, 12, 22, 11, 90]
 
bubbleSort(arr)
 
print ("Sorted array is:")
for i in range(len(arr)):
    print ("% d" % arr[i]),
