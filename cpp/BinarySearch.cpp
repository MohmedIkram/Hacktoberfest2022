#include <bits/stdc++.h> //header file that includes every standard library.
using namespace std;
#define int long long

int32_t main()
{
    int n; //number of elements
    cin >> n;

    int a[n]; //array of size n
    for (int i = 0; i < n; i++)
        cin >> a[i];

    sort(a, a + n); // assuming the array is unsorted..

    cout << "Enter an number to be searched!\n";
    int search_element; //element to be searched
    cin >> search_element;

    int position = -1; //a variable to store the position of the element to be searched
    int left = 0, right = n - 1;
    int mid;
    while (left <= right)
    {
        mid = left + (right - left) / 2;
        if (a[mid] == search_element)
        {
            position = mid;
            break;
        }
        else if (a[mid] > search_element)
            right = mid - 1;
        else
            left = mid + 1;
    }
    if (position == -1)
        cout << "Element is not Found\n";
    else
        cout << "Element Found at position " << position + 1 << '\n';
}

/* ##imp : Binary Search only works in sorted arrays
    This is an efficient way for searching than Linear search */
// Talking about its time complexity
//Best Case - O(1)
//Average Case - O(log n)
//Worst Case - O(log n)
