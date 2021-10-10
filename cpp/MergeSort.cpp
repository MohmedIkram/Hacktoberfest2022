// Merge sort algorithm
// Time Complexity= O(nlog(n))

#include <bits/stdc++.h>

using namespace std;

// function to merge two arrays using two pointer method
void merge(vector<int> &arr, int s, int e, int mid){
    int i=s, j=mid+1;
    vector<int> ans;
    while(i<=mid && j<=e){
        if(arr[i]<=arr[j]){
            ans.push_back(arr[i]);
            i++;
        }
        else{
            ans.push_back(arr[j]);
            j++;
        }
    }

    while(i<=mid){
        ans.push_back(arr[i]);
        i++;
    }

    while(j<=e){
        ans.push_back(arr[j]);
        j++;
    }

    // Replacing the new array elements with the original array
    for(int x=0; x<ans.size(); x++){
        arr[s+x]=ans[x];
    }
}

void mergesort(vector<int> &arr, int i, int j){
    // Base condition 
    if(i==j || i>j){
        return;
    }

    int mid=(i+j)/2;
    mergesort(arr,i,mid);
    mergesort(arr,mid+1,j);
    merge(arr,i,j,mid);    
}

int main()
{
    vector<int> arr={2,3,1,6,7,4};
    cout<<"Before Sorting: ";
    for(int i=0; i<arr.size(); i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;

    cout<<"After Sorting: ";
    mergesort(arr,0,arr.size()-1);
    for(int i=0; i<arr.size(); i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    return 0;
}

// output:
// Before Sorting: 2 3 1 6 7 4
// After Sorting: 1 2 3 4 6 7