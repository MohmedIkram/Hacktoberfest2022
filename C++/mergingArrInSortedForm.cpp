//Merging two sorted arrays into a third one in sorted format

#include <iostream>
using namespace std;

void merge(int arr1[], int n, int arr2[], int m, int arr3[]){
    int i = 0;
    int j = 0;
    int k = 0;
    while(i<n && j<m){
        if(arr1[i] < arr2[j]){
            arr3[k] = arr1[i];
            k++;
            i++;
        }
        else{
            arr3[k] = arr2[j];
            k++;
            j++;
        }
    }

    while(i<n){
        arr3[k] = arr1[i];
        k++;
        i++;
    }
    while(j<m){
        arr3[k] = arr2[j];
        k++;
        j++;
    }
}
void print(int arr3[], int n){
    for(int i = 0; i < n; i++){
        cout<<arr3[i]<<" ";
    }cout<<endl;
}
int main(){
    int arr1[4] = {12,45,67,80};
    int arr2[3] = {9,25,47};
    int arr3[7] = {0};

    merge(arr1, 4, arr2, 3, arr3);
    print(arr3, 7);
    return 0;
}
