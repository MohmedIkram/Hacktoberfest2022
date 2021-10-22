#include <iostream>
using namespace std;
// sum function get recalled till condition is satisfied
// return values stackup in prevsum and at o input prev sum becomes sum of n-1 number which is added with n

int sum(int n)
{
    if (n == 0) // returns 0 at 0 input
    {
        return 0;
    }
    int prevsum = sum(n - 1); // sum gets recalled with n-1 input
    return n + prevsum;
}
int main()
{
    int n;
    cout << "enter the number" << endl;
    cin >> n;
    cout << sum(n) << endl;
    return 0;
}
