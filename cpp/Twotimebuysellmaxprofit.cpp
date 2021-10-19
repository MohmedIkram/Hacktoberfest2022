#include <bits/stdc++.h>
using namespace std;

struct transaction{
  int profit = 0;
  int index = -1;
};


int main()
{
  int price[] = {7 , 34, 4, 32, 89, 45, 67,120, 22,11, 80, 23};
  int n  = sizeof(price) / sizeof(price[0]);
  

  struct transaction profit,mx,prev;
  for (int i = 1; i < n; i++)
  {

    int sub = price[i] - price[i - 1];

    if (sub > 0)
    { 
      profit.profit += sub;
    }
    else
    {
      if (profit.profit >= mx.profit)
      {
        prev.profit = mx.profit;
        prev.index = mx.index;
        mx.index = i - 1;
        mx.profit = profit.profit;
      }
      else if (profit.profit >= prev.profit && profit.profit < mx.profit)
      {
        prev.profit = profit.profit;
        prev.index = i - 1;
      }
      profit.profit = 0;
    }
  }
  if (profit.index > mx.profit)
  {
    prev.profit = mx.profit;
    prev.index = mx.index;
    mx.profit = profit.profit;
    mx.index = n - 1;
  }
  else
  {
    if (profit.profit > prev.profit)
    {
      prev.profit = profit.profit;
      prev.index = n-1;
    }
  }
  int i = mx.index,j=prev.index;
  while(i>=0 && price[i]>price[i-1]){
    i--;
  }
  while (j > 0 && price[j] > price[j - 1])
  {
    j--;
  }

  cout << "Maximum Profit=" << mx.profit + prev.profit << endl;
  cout << "1. buy at :" << price[i] << " and sell at " << price[mx.index] << endl;
  cout << "2. buy at :"<<price[j]<<" and sell at "<<price[prev.index] <<endl;
  return 0;
}
