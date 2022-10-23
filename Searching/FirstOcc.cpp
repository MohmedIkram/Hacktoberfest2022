#include<bits/stdc++.h>
using namespace std;

//naive
int firstOccurence(int arr[] ,int n, int x)
{
    for(int i=0; i<n ;i++)
    {
        if(arr[i] == x)
            return i;
    }
    return -1;
}


//iterative
int firstOccItr(int arr[], int n, int x)
{
    int low = 0, high = n-1;
    while(low<=high)
    {
        int mid = (low + high)/2;

        if(x > arr[mid])
            low = mid + 1;
        
        else if(x < arr[mid])
            low = mid + 1;

        else
        {
            if(mid == 0 || arr[mid - 1] != arr[mid])
                return mid;

            else    
                high = mid - 1;
        }
    }
}
int main()
{
    int arr[] = {5, 10, 10, 10, 20}, n = 5;

	int x = 10;
	
	cout<<firstOccItr(arr, n, x);
    return 0;
}