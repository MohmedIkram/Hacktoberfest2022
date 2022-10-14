#include<iostream>
using namespace std;


int BinarySearch(int key, int n, int arry[]){
    int strting=0;
    int eding=n;

    while (strting<=eding)
    {   int mid= strting + (strting+eding)/2;
        if (arry[mid]==key)
        {
            return mid;
        }else if(arry[mid]>key){
            eding=mid-1;
        }else if(arry[mid]<key){
            strting=mid+1;
        }
        
    }
    return -1;

}


int main(){

    int n;
    cin>>n;
    int arry[n];

    for (int i = 0; i < n; i++)
    {
        cin>>arry[i];
    }
    cout<<"Enter The Key";
    int key;
    cin>>key;
    cout<<BinarySearch(key,n,arry)<<endl;

    return 0;

    
}