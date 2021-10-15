#include <stdio.h>

unsigned short count=0;

unsigned short Check(unsigned short Num,unsigned short I){
   unsigned short a=(Num/I)%10!=0;
   unsigned short b=(Num/I)%10==0 && (Num/I/10)%10!=0;
   unsigned short c=(Num/I)%10==0 && (Num/I/10)%10==0 && (Num/I/100)%10!=0;
   return a+b+c+(Num==0 && I==100);
}

void IntToStr(unsigned short I,unsigned char string[],unsigned short mode){
    unsigned short i;
    for(i=100;i>0;i/=10){
        if(Check(I,i)>=1){
            string[count]=((I/i)%10)+48;
            count++;
        }
    }
    (mode==1) ? (count=0) : 0;
}

void NumToStr(unsigned short Int,unsigned short Dec,unsigned char str[]){
    str[0]='\0';
    IntToStr(Int,str,0);
    str[count]='.';
    count++;
    IntToStr(Dec,str,0);
    count=0;
}


int main(){
    unsigned int arr[2];
    unsigned char STR[10];
    unsigned int val1,val2;
    float get=103.13;
    val1 = get;
    get = val1-get;
    val2*=get*1000;
    arr[0]=val1;
    arr[1]=val2;
    NumToStr(arr[0],arr[1],STR);
    printf("%s\n",STR);
}
