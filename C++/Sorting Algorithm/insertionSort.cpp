#include<iostream>
using namespace std;

void sort(int arr[], int size)
{
    for(int i = 1; i<size; i++)
    {
        int key = arr[i];
        int j = i - 1;

        while(j >= 0 && arr[j] > key)
        {
            arr[j+1] = arr[j];
            j = j - 1;
        }
    swap(arr[j+1], key);
    }
}

void printArray(int arr[], int size)
{
    for(int i = 0; i<size; i++)
    cout<<arr[i]<<" ";
}

int main()
{
    int a[] = {2, 5, 1, 4, 3, 8, 0, 6, 7};
    int size = sizeof(a) / sizeof(a[0]);
    sort(a, size);
    printArray(a, size);
}