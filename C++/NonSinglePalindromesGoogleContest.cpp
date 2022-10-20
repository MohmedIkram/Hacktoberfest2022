#include <iostream>
//To use the substr utility of strings
#include <string.h>
using namespace std;

int main(){

    int i,j,k;

    string s;
    cin>>s;
    
    int len=s.length();
    cout<<len<<endl;

    //Algorithm to find non-single substrings that are palindrome
    for(i=0;i<len;i++){
        //Setting the values of iterators j and k to compare left and right of an index
        j=i-1;
        k=i+1;
        
        for(;j>=0 && k<=len;j--,k++){
            //If left and rigt do not match then break out of loop
            if(s[j]!=s[k]){
                break;
            }
            //Else print the substring palindrome
            else{
                cout<<s.substr(j,k-j+1)<<endl;
            }
        }

        //Setting the value of iterators j and k to compare index and right of an index
        j=i;
        k=i+1;
        
        for(;j>=0 && k<=len;j--,k++){
            //If index and right do not match then break out of loop
            if(s[j]!=s[k]){
                break;
            }
            //Else print the substring palindrome
            else{
                cout<<s.substr(j,k-j+1)<<endl;
            }
        }

    }
    
    return 0;
}
