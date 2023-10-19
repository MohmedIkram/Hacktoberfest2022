#include <iostream>
using namespace std;
int main()
{
    int n,zero=0,non_zero=0;
    cout<<"Enter size: ";
    cin>>n;
    int A[n][n];
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            cin>>A[i][j];
            if(A[i][j]==0)
            {
                zero++;
            }
            else
            non_zero++;
        }
    }
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            cout<<A[i][j];
        }
        cout<<endl;
    }
    cout<<endl;
    cout<<"zero elements: "<<zero<<endl;
    cout<<"non zero: "<<non_zero;

    return 0;

}
