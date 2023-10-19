#include<iostream>
#include<map>
using namespace std;
int main()
{
	int t,k,n,i,s,j;
	cin>>t;
	for(int x=0;x<t;x++)
	{
		map<int,int> m;
		map<int,int>::iterator it;
		s=0;
		cin>>n>>k;
		int a[n];
		for(i=0;i<n;i++)
		{
			cin>>a[i];
			m[a[i]]++;
		}
		if(m.size()>k)
			cout<<"-1"<<endl;
		else
		{
			if(m.size()<k)
			{
				for(i=1;i<=n;i++)
				{
					for(it=m.begin();it!=m.end();it++)
					{
						if(it->first!=i)
						{
							m[i]=1;
							break;
						}
					}
					if(m.size()==k)
					break;
				}
			}
			cout<<n*k<<endl;
			for(i=0;i<n;i++)
			{
				for(it=m.begin();it!=m.end();it++)
					cout<<it->first<<" ";
			}
			cout<<endl;
		}
	}
}
