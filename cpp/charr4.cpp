#include<iostream>
using namespace std;

int main()
{
    //largest word in a sentence

    int n;
    cin>>n;
    cin.ignore();
    char arr[n+1];

    cin.getline(arr,n);
    cin.ignore();

    int i=0;
    int curr=0,maxcurr=0;
    int st=0,maxst=0;
    while (1)
    {
        if(arr[i]==' ' || arr[i]=='\0')
        {
            if (curr>maxcurr)
            {
                maxcurr=curr;
                maxst=st;
            }
            curr=0;
            st=i+1;
        }
        else{
            curr++;
        }
        if(arr[i]=='\0')
        break;

        i++;
        
    }
    cout<<maxcurr<<" ";
    for (int i = 0; i < maxcurr; i++)
    {
        cout << arr[i+maxst];
    }
    
    return 0;
}