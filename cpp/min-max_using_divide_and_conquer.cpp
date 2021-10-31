#include <iostream>
#include <climits>

using namespace std;

void min_max(int a[], int p, int q, int &min, int &max)
{

    if(p==q)
    {
        min = a[p];
        max = a[p];
    }

    else if(p==q-1)
    {
        if(a[p]<a[q]){
            max = a[q];
            min = a[p];
        }
        else
        {
            max = a[p];
            min = a[q];
        }
    }
    else{
        int mid = (p+q)/2;
        int min1,max1,min2,max2;
        min_max(a,p,mid,min1,max1);
        min_max(a,mid+1,q,min2,max2);
        if(min1<min2)
        {
            min = min1;
        }
        else
            min = min2;
        if(max1>max2)
            max = max1;
        else
            max = max2;
    }
}


int main()
{
    int n;
    cout << "Enter the number of elements in the array: ";
    cin >> n;
    int a[n];
    cout << "Enter the elements of the array:\n";
    for(int i=0;i<n;i++){
        cin >> a[i];
    }

    int max = INT_MIN, min = INT_MAX;

    min_max(a,0,n-1,min,max);

    cout << "\n\nmin: " << min << "  max: " << max << '\n';
}