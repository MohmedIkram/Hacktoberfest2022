#include<bits/stdc++.h>
using namespace std;

int firstOcc(int arr[], int n, int x)
{
	int low = 0, high = n - 1;

	while(low <= high)
	{
		int mid = (low + high) / 2;

		if(x > arr[mid])
			low = mid + 1;

		else if(x < arr[mid])
			high = mid - 1;

		else
		{
			if(mid == 0 || arr[mid - 1] != arr[mid])
				return mid;

			else
				high = mid - 1;
		}

	}

	return -1;
}


int lastOcc(int arr[], int n, int x)
{
	int low = 0, high = n - 1;

	while(low <= high)
	{
		int mid = (low + high) / 2;

		if(x > arr[mid])
			low = mid + 1;

		else if(x < arr[mid])
			high = mid - 1;

		else
		{
			if(mid == n - 1 || arr[mid + 1] != arr[mid])
				return mid;

			else
				low = mid + 1;
		}

	}

	return -1;
}


int countOcc(int arr[] ,int n, int x)
{
    int first = firstOcc(arr, n, x);
    if(first == -1)
        return 0;

    else
        return lastOcc(arr, n, x) - first + 1;
}

int main()
{   
    int arr[] = {10, 20, 20, 20, 40, 40}, n = 6;

    int x = 20;

    cout << countOcc(arr, n, x);
    return 0;
}