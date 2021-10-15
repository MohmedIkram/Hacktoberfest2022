#include <stdio.h>

void Conv(unsigned int FRQ,unsigned int Time){

    unsigned char str[4];
   
    unsigned short c=0;

    unsigned int i = 0;

    float SC  = FRQ/12;
    float T   = 1/SC;
    
    unsigned int Pulse = 65535 - (Time/T);
    printf("%d\n",Pulse);

    for(i=Pulse;i>0;i/=16){
       (i%16 > 9) ? (str[c]=(i%16)+55) : (str[c]=(i%16)+48);
       c++;
    }
    printf("\n%s\n",str);

}
int main(){
    
    unsigned short a[]={2028,1912,2272,1517,1703},i;
    for(i=0;i<5;i++)
    Conv(24,a[i]/2);
}
