void reverse(int arr[], int n)
{
    int start = 0;
    int end = n - 1;
    for (start = 0; start <= end; start++)
    {
        swap(arr[start], arr[end]);
        end--;
    }
}

int main()
{
    int array[] = {1, 2, 3, 4, 5, 6, 7, 8, 45, 21, 32, 48};
    int size = sizeof(array) / sizeof(array[0]);
    reverse(array, size);
    for (int i = 0; i < size; i++)
    {
        cout << array[i];
        // cout << " || ";
    }

    return 0;
}
