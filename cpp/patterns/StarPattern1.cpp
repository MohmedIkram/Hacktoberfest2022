#include <iostream>
using namespace std;

// ----------------------- Palindromic Pattern------------------------------
int main()
{
    int i, j, x;

    for (int i = 1; i <= 5; i++)
    {
        x = i;
        for (int j = 1; j <= 9; j++)
        {
            if (j >= 6 - i && j <= 4 + i)
            {
                cout << x;
                if (j < 5)
                    x--;

                else
                    x++;
            }

            else
                cout << " ";
        }

        cout << "\n";
    }
}
