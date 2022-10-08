#include <iostream>
using namespace std;

void sort(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        for (int j = 0; j < size - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
                swap(arr[j + 1], arr[j]);
        }
    }
}

void printArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
}

int main()
{
    int a[] = {3, 1, 5, 2, 6};
    int size = sizeof(a) / sizeof(a[0]);
    sort(a, size);
    printArray(a, size);
}