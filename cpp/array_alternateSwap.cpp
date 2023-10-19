#include<iostream>
using namespace std;

//Swapping alternate elements of an array

void change(int arr[], int n)
{
    int i=0;
    while(i < n-1)
    {
        swap(arr[i], arr[i+1]);
        i += 2;
    }
}

void printArray(int arr[], int n)
{
    for(int i=0; i<n; i++)
    {
        cout << arr[i] << " ";
    }
}

int main()
{
    int arr[10],n;
    cout << "enter the size, max 10: ";
    cin >> n;
    cout << "enter the array elements: ";

    for(int i=0; i<n; i++)
    {
        cin >> arr[i];
    }

    change(arr, n);
    printArray(arr, n);
}