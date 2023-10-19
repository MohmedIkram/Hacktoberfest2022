#include<iostream>
using namespace std;

int unique(int arr[],int n) {
    int a=0;
    for(int p=0;p<n;p++) {
        a=a^arr[p];
    }
    return a;
}

int main() {
    int arr[]={2,4,3,3,4,6,2};
    cout<<unique(arr,7)<<endl;

    return 0;
}