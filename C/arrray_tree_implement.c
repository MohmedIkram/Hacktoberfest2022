#include <stdio.h>
#include <stdlib.h>
#include <math.h>
int *t;
void createTree(int n){
    int x,r;
    printf("\nEnter element in root : ");
    scanf("%d",&x);
    t[0]=x;
    for(int i=0;i<n;i++){
        printf("\nEnter the data for left child %d : ",t[i]);
        scanf("%d",&x);
        t[2*i+1]=x;
        printf("Enter the data for right child %d : ",t[i]);
        scanf("%d",&x);
        t[2*i+2]=x;
        
    }
}

void display(int i){
    int r;
    for(r=0;r<i;++r){
        if(r==0){
            printf("\n Root element %d : ",t[r]);
        }
        printf("\n Left child %d is %d",t[r],t[2*r+1]);
        printf("\n Right child %d is %d",t[r], t[2*r+2]);
    }
}

int main()
{
    int h,l,i;
    printf("Enter the height of node: ");
    scanf("%d",&h);
    l=pow(2,h);
    i=l-1;
    printf("\nNumber of leaf nodes: %d",l);
    printf("\nNumber of internal nodes: %d",i);
    t=(int*)malloc((i+l)*sizeof(int));
    createTree(i);
    display(i);
    return 0;
}
