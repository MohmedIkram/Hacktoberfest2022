//c++ program to implement tower of hanoi problem
#include<iostream>
using namespace std;

//recursive funtion
void TowerOfHanoi(int num,char A,char B,char C){
  if(num>0){
    TowerOfHanoi(num-1, A, C, B);
    cout<<"Move a disk "<<num<<" from "<<" "<<A<<" to"<<" "<<C<<endl;
    TowerOfHanoi( num-1, B, A, C);
  }
}

//main funtion
int main(){
  int numOfDisk;
  cout<<"Enter the no. of disks"<<endl;
  cin>>numOfDisk;
  
  //calling recursive funtion
  TowerOfHanoi(numOfDisk,'A','B','C');//A is the source rod , C is destination rod ,B is auxiliary rod
  cout<<endl;
}
