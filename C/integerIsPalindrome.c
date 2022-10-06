#include<stdlib.h>
#include<stdio.h>
#include<stdbool.h>  

bool isPalindrome(int x){
    int y;
    int r=x;
    int p=0;
    if(x<0)
        return false;
    else{
        while(r>0){
        y= r%10;
        p=p*10 + y;
        r=r/10;
        }
        if(p==x)
            return true;
        else
            return false;
    }
}
int main(){
    int x;
    bool result;
    scanf("%d", &x);
    result= isPalindrome(x);
    printf("%i", result);
}
