#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main(){
    int n,g,c=1;
    srand(time(0));
    n=rand()%100 +1;
    
   do{
       printf("Guess the Number between 1 to 100\n");
       scanf("%d",&g);
       if(g>n){
           printf("Lower Number Please\n");
       }
       else {if(g<n){
           printf("Higher Number Please\n");
       }
       else printf("You got it :) Number is %d\nYou guessed it in %d attempts",n,c);
       }
       c++;
   }while(n!=g);

    return 0;
}
