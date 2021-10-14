#include <stdc++.h>

using namespace std;

// Decreasing

int main()
{
    vector<int> v{21, 74, 98, 64, 14, 8, 7, 38, 19, 49};
    sort(v.begin(), v.end(), greater<int>());
    cout << " Here is the Sorted vector \n ";
    for (auto i : v)
        cout << i << " ";
    return 0;
}

// Increasing

int main()
{
    vector<int> v{21, 98, 77, 5, 19, 49, 32, 1, 27, 94};
    sort(v.begin(), v.end());
    cout << " Here is the Sorted array \n ";
    for (auto i : v)
        cout << i << " ";
    return 0;
}