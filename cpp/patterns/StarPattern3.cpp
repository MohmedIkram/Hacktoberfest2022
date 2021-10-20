#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int val;
    for (int i = 0; i < n; i++)
    {

        for (int j = 0; j <= i; j++)
        {
            if (j == 0 || i == 0)
                val = 1;
            else
                val = val * (i - j + 1) / j;

            cout << val;
        }
        cout << "\n";
    }
}