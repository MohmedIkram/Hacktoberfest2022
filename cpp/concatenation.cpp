#include <iostream>
using namespace std;
 
int main()
{
    string s_1, s_2, fin;
    cout << "Enter string";
    getline (cin, s_1);
    cout << "Enter string ";
    getline (cin, s_2);
    fin= s_1 + s_2;
    cout << fin;
 
    char str1[50], str2[50], fin[100];
 
    cout << "Enter string";
    cin.getline(str1, 50);
 
    cout << "Enter string";
    cin.getline(str2, 50);
 
    strcat(str1, str2); 
 
    cout << "str1 = " << str1 << endl;
    cout << "str2 = " << str2;
 
    return 0;
}
