#In quick sort we put 1 element i.e, starting element at it's correct position (which is it's index + count of smaller elements) 
# and after that we put elements with respect to correct positioned element and 
# place smaller elements on left and bigger elements on right and call qick sort on both side

#quick sort algo
def quick_sort(arr, start, end):
    # Please add your code here
    if start >= end:                         #out of bound as our base case for recursion
        return
    pivot_index = partition(arr,start,end)   #seprating smaller and bigger number to it's left and right with respect to pivot(which we considered first)
    quick_sort(arr,start,pivot_index - 1)    # calling quicksort on both left and right side of pivoted element
    quick_sort(arr,pivot_index+1,end)

#putting 1 element at it's correct position to segreate other elements 
def partition(arr,start,end):
    pivot = arr[start]                                          #selecting first elemet as pivot
    count = 0                                                   # count to help find pivot_index which is index+count(count of smaller element)
    for i in range(start,end+1):
        if arr[i] < pivot:                                      # counting smaller elements
            count = count+1
    
    arr[start+count],arr[start] = arr[start],arr[start+count]   #placing pivot element at it's correct position
    pivot_index = start+count
    
    i = start                                                   # 2 pointer i,j to iterate over array from start and end
    j = end

    #we only swap elements if we find greater number on left of pivot or smaller number on right of pivot element
    while i<j:
        if arr[i] < pivot:
            i = i + 1
        elif arr[j] >= pivot:
            j = j-1
        else :
            arr[i],arr[j]=arr[j],arr[i]                         #swapping smaller number with greater number or vice versa
            i=i+1
            j=j-1
    return pivot_index

#main  
n=int(input())
arr=list(int(i) for i in input().strip().split(' '))
quick_sort(arr, 0, len(arr)-1)
print(arr)
