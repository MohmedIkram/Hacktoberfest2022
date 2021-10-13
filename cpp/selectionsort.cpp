//selection sort
//TIME COMPLEXITY : O(n^2) (worst case)
//SPACE COMPLEXITY : O(1)

#include <bits/stdc++.h>
using namespace std;

int mini(int arr[], int i, int n) {
    int min = i;
    while (i < n) {
        if (arr[i] < arr[min])
            min = i;
        i++;
    }
    return min;
}

void selectionsort(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        int min_index = mini(arr, i, n);
        if (i != min_index)  swap(arr[i], arr[min_index]);
    }

}
int main() {
    int n;
    cin >> n;
    int arr[n + 1];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    selectionsort(arr, n);
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}