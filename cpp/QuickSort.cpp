#include <iostream>
using namespace std;

int partition(int input[],int s,int e)
{    
    int count=0;
    int x=input[s];
    for(int i=s+1;i<=e;i++)
    {
        if(x>input[i])
            count++;
    }
    int pi=s+count;

    input[s]=input[pi];
    input[pi]=x;
    int i=s,j=e;

  
    
    while(i<pi&&j>pi)              //placing elements less than input[pi] to its left and greater than or equal to to its right
    {
        if(input[i]<input[pi])
        {
            i++;
        }
        else if(input[j]>=input[pi])    //equal to as placing all equal elements to right
        {
            j--;
        }
        else
        {
            int temp=input[i];
            input[i]=input[j];
            input[j]=temp;
            i++;
            j--;
        }
    }
    
    return pi;
    
    
}   
void qs(int input[],int s,int e)
{
    if(s>=e)
        return;
    int x=partition(input,s,e);
    qs(input,s,x-1);
    qs(input,x+1,e);
}


void quickSort(int input[], int size) {
    int s=0,e=size-1;
    qs(input,s,e);

}

int main(){
    int n;
    cin >> n;
  
    int *input = new int[n];
    
    for(int i = 0; i < n; i++) {
        cin >> input[i];
    }
    
    quickSort(input, n);
    for(int i = 0; i < n; i++) {
        cout << input[i] << " ";
    }
    
    delete [] input;

}