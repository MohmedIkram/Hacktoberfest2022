#include<bits/stdc++.h>
using namespace std;

int bSearchRec(int arr[], int x, int low, int high)
{
    if(low<high)
        return -1;

    int mid = (low + high) /2;
    if(arr[mid] == x)
        return mid;

    else if(arr[mid] > x)
        return bSearchRec(arr, x, low, mid - 1);
    
    else
        return bSearchRec(arr, x, mid + 1, x);
}

//----------------Iterative----------
int bSearchItr(int arr[], int n, int x)
{
    int low =0, high =n-1;
    while(low <= high)
    {
        int mid = (low + high)/2;

        if (arr[mid] == x)
            return mid;

        else if(arr[mid] > x)
            high = mid -1;

        else
            low = mid + 1;
    }
}
int main()
{   
    int arr[] = {10, 20, 30, 40, 50, 60}, n = 6;

	int x = 25;
	
	cout<<bSearchItr(arr, n, x);

    return 0;
}