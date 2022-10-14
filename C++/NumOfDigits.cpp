#include<iostream>      //for input and output
#include<cmath>         //for log10() function of cmath file
using namespace std;
int main()
{
    //program to find the number of digits in a number in O(1) complexity
    int n;
    //getting a number from the user
    cout<<"Enter a number n : ";
    cin>>n;

    //printing the number of digits of a number
    //simple way to find the number of digits :
    //1. find the log of the number (base 10)
    //2. convert it into int
    //3. add 1 to it
    cout<<"Number of digits in "<<n<<" are "<<((int)log10(n))+1<<endl;
    return 0;
}
