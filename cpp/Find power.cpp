#include<iostream>
#include<cmath>
using namespace std;

float my_pow(float num=2, int p=2)
{
	float result= num;
	
	for(int i=1; i<p; i++)
	{
		result=result*num	;	
	}
	
	return result;
}
main()
{
	char ch;
	float base,exp;
	while(true)
	{
		cout<<"Enter base: ";
		cin>>base;
		cout<<"Enter Exponent: ";
		cin>>exp;
		cout<<my_pow(base, exp)<<endl;
		cout<<"do you want exit (y/n)";
		cin>>ch;
		if(ch=='y')
			break;
	}
	

}
