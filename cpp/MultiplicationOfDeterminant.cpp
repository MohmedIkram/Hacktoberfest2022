#include <iostream>
using namespace std;
int main()
{
int a[10][10],b[10][10],r1,c1,r2,c2,i,j,mult[10][10];
cout<<" enter rows and columns of 1st matrix ";
cin>>r1>>c1;
cout<<" enter rows and  columns of 2nd column ";
cin>>r2>>c2;
if(c1!=r2)
{
    cout<<"cant be multiplied"<<endl;
    return 0;
}
cout<<" enter elements of 1st matrix "<<endl;
for(i=0;i<r1;i++)
{
    for(j=0;j<c1;j++)
    {
        cout<<" enter elements a"<<i+1<<j+1<<" : ";
        cin>>a[i][j];
    }
}
cout<<" enter elements of 2nd matrix "<<endl;
for(i=0;i<r1;i++)
{
    for(j=0;j<c1;j++)
    {
        cout<<" enter elements b"<<i+1<<j+1<<" : ";
        cin>>b[i][j];
    }
}

for(i=0;i<r1;i++)
    for(j=0;j<c2;j++)
     {
         mult[i][j]=0;
    for(int k=0;k<c1;k++)
    {
         mult[i][j]+=a[i][k]*b[k][j];
    }
     }
for(i=0;i<r1;i++)
    for(j=0;j<c2;j++)
{
cout<<mult[i][j]<<" ";
if(j==c2-1)
cout<<endl;
}
return 0;
}
