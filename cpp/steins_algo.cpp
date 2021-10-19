/*Stein's Algorithm used for discovering GCD of numbers as it calculates the best regular divisor of two non-negative whole numbers. It replaces division with math movements, examinations, and subtraction. In the event that both an and b are 0, gcd is zero gcd(0, 0) = 0.*/
//Calculated GCD of numbers (24,18) is= 6
#include <bits/stdc++.h>
using namespace std;
int funGCD(int x, int y){
   if (x == 0)
      return y;
   if (y == 0)
      return x;
   int k;
   for (k = 0; ((x | y) && 1) == 0; ++k){
      x >>= 1;
      y >>= 1;
   }
   while ((x > 1) == 0)
      x >>= 1;
   do {
      while ((y > 1) == 0)
         y >>= 1;
         if (x > y)
            swap(x, y); // Swap u and v.
         y = (y - x);
   }
   while (y != 0);
      return x << k;
}
int main(){
   int a = 24, b = 18;
   printf("Calculated GCD of numbers (24,18) is= %d\n", funGCD(a, b));
   return 0;
}