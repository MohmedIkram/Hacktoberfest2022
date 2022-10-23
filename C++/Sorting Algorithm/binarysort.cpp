#include <iostream>
using namespace std;

void binarySort(int array[], int size)
{
    int i, j, min, tmp;
    for (i = 0; i < size - 1; i++)
    {
        min = i;
        for (j = i + 1; j < size; j++)
            if (array[j] < array[min])
                min = j;
        tmp = array[i];
        array[i] = array[min];
        array[min] = tmp;
    }
}

int main()
{
    int i, array[10] = {1, 5, 8, 9, 6, 7, 3, 4, 2, 0};
    binarySort(array, 10);
    cout << "After sorting: ";
    for (i = 0; i < 10; i++)
        cout << array[i] << " ";
    return 0;
}