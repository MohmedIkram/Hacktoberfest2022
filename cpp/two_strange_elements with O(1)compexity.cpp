#include<iostream>
#include<cstdio>
#include<cmath>
using namespace std;
void printStrangeElements(int *arr,int n){
int ans=0,i,k=0;
  for(i=0;i<n;i++)
    ans=ans^arr[i];
  while((ans&1)!=1)
  {
    ans=ans>>1;
    k++;
  }
  int group0=0,group1=0;
  for(i=0;i<n;i++)
  {
    if(((arr[i]>>k)&1)==1)
    {
      group0=group0^arr[i];
    }
    else
    {
      group1=group1^arr[i];
    }
  }
  int x=group0;
  int y=group1;
  if(x<y)
    cout<<x<<" "<<y;
  else
    cout<<y<<" "<<x;
}

int main(){
  int n;
  cin>>n;
  int *arr = new int[n];
  for(int i = 0;i<n;i++){
    cin>>arr[i];
  }
  printStrangeElements(arr,n);
  return 0;
}
