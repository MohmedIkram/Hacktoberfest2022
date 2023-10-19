#include<iostream>
using namespace std;

void heapify(int arr[], int size, int i)
{
    int largest = i;
    int l = 2*i + 1;
    int r = 2*i + 2;
    if(l < size && arr[l] > arr[largest])
    largest = l;
    if(r < size && arr[r] > arr[largest])
    largest = r;

    if(largest != i)
    {
        swap(arr[i], arr[largest]);
        heapify(arr, size, largest);
    }
}
void sort(int arr[], int size)
{
    for(int i = size/2 - 1; i >= 0; i--)
    heapify(arr, size, i);

    for(int i = size - 1; i >= 0; i--)
    {
        swap(arr[0], arr[i]);

        heapify(arr, i, 0);
    }
}

void printArray(int arr[], int size)
{
    for(int i=0; i < size; i++)
    cout<<arr[i]<<" ";
}

int main()
{
    int a[] = {5, 2, 1, 3, 7};
    int size = sizeof(a) / sizeof(a[0]);
    sort(a, size);
    printArray(a, size);
}