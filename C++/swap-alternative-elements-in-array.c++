//Swap alternative elements in array
//eg
//input={1,2,3,4,5}
//output={2,1,4,3,5}

#include<iostream>
using namespace std;

int swapAlternatives(int arr[],int size){
  for(int i=0;i<size;i=i+2){
    if(i+1<size){
      swap(arr[i],arr[i+1]);
      //alternative of swap
      // int temp= arr[i+1];
      // arr[i+1]=arr[i];
      // arr[i]=temp;
    }
  }
  return 0;
}

int printArray(int array[], int size){
    for (int i = 0; i < size; i++)
    {
        cout<<array[i]<<" ";
    }
    cout<<endl;
    return 0;
}

int main(){
    int arr[10]= {9,3,5,6,-9,32,118,35,76,-11};    //even array
    swapAlternatives(arr,10);
    printArray(arr,10);
    int arr2[11]= {9,3,5,6,-9,32,118,35,76,-11,222}; //odd array
    swapAlternatives(arr2,11);
    printArray(arr2,11);
    return 0;
}