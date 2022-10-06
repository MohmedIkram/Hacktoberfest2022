/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <bits/stdc++.h>
using namespace std;

int main()
{
    int querry;
    cin>>querry;
    int size;
    cin>>size;
    int A[size];
    for(int i=0; i<size; i++)
    cin>>A[i];
    
    vector<int> pre_sum(size,A[0]), suf_sum(size,A[size-1]);
    long long ans=0;
    for(int i=1; i<size; i++)
       pre_sum[i]=pre_sum[i-1]+A[i];
    for(int i=size-2; i>=0; i--)
    {
        suf_sum[i]=suf_sum[i+1]+A[i];
        ans=ans+suf_sum[i+1]*A[i];
    }
    vector<long long> result;
    
    while(querry)
    {
        int a,b,c;
        cin>>a>>b>>c;
        
        if(a==0)
        {
            long long temp=ans;
            for(int i=0; i<b-1; i++)
            temp=temp-suf_sum[i+1]*A[i];
            for(int i=c; i<size; i++)
            {
                temp=temp-pre_sum[i-1]*A[i];
                if(b-2>=0)
                temp=temp+pre_sum[b-2]*A[i];
            }
            cout<<temp<<endl;
            result.push_back(temp);
        }
        else
        {
              int ab=A[b-1];
              for(int i=b-1; i<size; i++)
              pre_sum[i]=pre_sum[i]-ab+c;
             
               for(int i=b-1; i>=0; i--)
               suf_sum[i]=suf_sum[i]-ab+c;
               A[b-1]=c;
              ans=0;
              for(int i=size-2; i>=0; i--)
              ans=ans+suf_sum[i+1]*A[i];
              cout<<ans<<endl;
        }
        querry--;
    }
    return 0;
}
