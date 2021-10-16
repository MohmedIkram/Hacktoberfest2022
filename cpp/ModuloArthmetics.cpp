#include <bits/stdc++.h>
using namespace std;

long fastPower(long a, long b, int n)
{
     long res = 1;

     while (b > 0)
     {

          if ((b & 1) != 0)
          {
               res = (res * a % n) % n;
          }

          a = (a % n * a % n) % n;
          b = b >> 1; // b/2
     }
     return res;
}

int main()
{

     cout << fastPower(3978432, 5, 1000000007);
     return 0;
}
