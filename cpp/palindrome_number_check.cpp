// A simple C++ program to check palindrome numbers 
// Author: Anish Shilpakar
// Palindrome numbers e.g. 12321, 1234321, 123454321

#include <iostream>
using namespace std;

int main(){
    int originalNumber, temp, reversedNumber = 0;
    // input the number from user
    cout << "Enter a positive number to check for palindrome: ";
    cin >> originalNumber;
    // store the original number in temporary variable
    temp = originalNumber;
    // reverse the number and store in another variable
    do{
        reversedNumber = reversedNumber * 10 + temp % 10;
        temp /= 10;
    }while(temp != 0);
    
    cout<<"The reverse of the entered number "<<originalNumber<<" is "<<reversedNumber<<endl;

    if(originalNumber == reversedNumber){
        cout<<"The number "<<originalNumber<<" is a palindrome number"<<endl;
    }else{
        cout<<"The number "<<originalNumber<<" is not a palindrome number"<<endl;
    }
    return 0;
}
