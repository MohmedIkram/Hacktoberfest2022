#include<bits/stdc++.h>
using namespace std;
// *************tower of hanoi************
void tower(int n,char a,char b,char c)
{
  //base case 
  //if we have only 1 disc then we can simply put it from tower a to tower c
  if(n==1)
  {
    cout<<"move "<<n<<" from "<<a<<" to "<<c<<endl;
    return;
  }
  
  //firstly call the function to put (n-1) discs from tower a to tower b
  tower(n-1, a, c, b);
  
  //then put last (nth) disc from tower a to tower c
  cout<<"move "<<n<<" from "<<a<<" to "<<c<<endl;
  
  //then again put (n-1) discs from tower b to tower c
  tower(n-1,b,a,c);
}
int main()
{
  int n;
  char a='A',b='B',c='C';
  cout<<"enter the number of discs: ";
  cin>>n;
  tower(n, a, b, c);
  cout<<"congrets! you have solved the problem :)";
  return 0;
}