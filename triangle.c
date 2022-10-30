#include <stdio.h>  
   
int main() {  
    int side1, side2, side3;  
    printf("Enter Length of Three Sides of a Triangle\n");  
    scanf("%d %d %d", &side1, &side2, &side3);     
   
    if((side1 + side2 > side3)&&(side2 + side3 > side1)
            &&(side3 + side1 > side2)) {  
        printf("It is a Valid Triangle\n");  
    } else {  
        printf("It is an invalid Triangle");  
    }  
   
    return 0;  
}
