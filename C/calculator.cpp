 #include<bits/stdc++.h>

using namespace std;

int main()

{

	int c;

	cout<<"Enter your choice\n";

	cin>>c;

	switch(c)

	{

		case 1:int a;

		       cout<<"Enter the number for squaring\n";

		       cin>>a;

		       a=a*a;

		       cout<<a;

		       break;

		case 2:int x,y,sum,diff,p,q;

		       cout<<"Enter the two numbers for arithematic operations\n";

		       cin>>x>>y;

		       sum=x+y;

		       diff=x-y;

		       p=x*y;

		       q=x/y;

		       cout<<"Sum="<<sum<<"\nDifference="<<diff<<"\nProduct="<<p<<"\nQuotient="<<q;

		       break;

		case 3:int b,c;

		       cout<<"Enter the two numbers\n";

			   cin>>b>>c;

			   if(b>c)

			   cout<<"1st number is greater\n";

			   else

			   cout<<"2nd number is greater\n";

			   break;

		case 4:int n;

		       cout<<"Enter the number\n";

			   cin>>n;

			   if(n%2==0)

			   cout<<"Even Number\n";

			   else

			   cout<<"Even conversion ="<<++n;

			   break;

		case 5:int m;

		       cout<<"Enter the number\n";

			   cin>>m;

			   if(m%2==0)

			   cout<<"Odd conversion="<<++m;

			   else

			   cout<<"Odd Number\n";

			   break;

		case 6:int z;

		       cout<<"Enter any number\n";

			   cin>>z;

			   z*=10;

			   cout<<"Required number ="<<z;

			   break;

		default:cout<<"Wrong choice";	   	   	   	          

	}

	return 0;

}
