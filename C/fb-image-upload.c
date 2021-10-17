#include<stdio.h>
int main(){
    float L, N, W, H;
    L >= 1;

    printf("w is ");
    scanf("%f", &W);
    printf("l is ");
    scanf("%f", &H);



    if(W<L || H<L){
        printf("UPLOAD ANOTHER");
    }else {
        if(W==H){
            printf("ACCEPTED");
        }else{
            printf("CROP IT");
        }
    }
    return 0;
   }