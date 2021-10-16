#include<stdio.h>
int validDate(char a[]){
    int dd=((a[0]-'0')*10+a[1]-'0');
    int mm=((a[2]-'0')*10+a[3]-'0');
    int yyyy=((a[4]-'0')*1000+(a[5]-'0')*100+(a[6]-'0')*10+(a[7]-'0'));
    if(a[8]!='\0'){
        return -1;//length is more invalid format
    }
    if(!(dd <32 && dd >0)){
        return 0;
    }
    if(!(mm>0 && mm<13)){
        return 0;
    }
    if(yyyy<=0){
        return 0;
    }
    return 1;

}
int leapYear(int yr){
    if(yr%400==0)
        return 1;
    if(yr%100==0)
        return 0;
    if(yr%4==0)
        return 1;
    return 0;
}
int main(){
    char dt1[10],dt2[10];
    int no_of_days[]={0,31,28,31,30,31,30,31,31,30,31,30,31};
    int diff=1,d1,d2,m1,m2,y1,y2,temp;
    printf("\n Enter the first date in ddmmyyyy format:");
    gets(dt1);
    printf("\n Enter the second date in ddmmyyyy format:");
    gets(dt2);
    if(validDate(dt1) && validDate(dt2)){
        d1=((dt1[0]-'0')*10+dt1[1]-'0');
        m1=((dt1[2]-'0')*10+dt1[3]-'0');
        y1=((dt1[4]-'0')*1000+(dt1[5]-'0')*100+(dt1[6]-'0')*10+(dt1[7]-'0'));
        d2=((dt2[0]-'0')*10+dt2[1]-'0');
        m2=((dt2[2]-'0')*10+dt2[3]-'0');
        y2=((dt2[4]-'0')*1000+(dt2[5]-'0')*100+(dt2[6]-'0')*10+(dt2[7]-'0'));
        if(y2-y1>0){
            diff+=no_of_days[m1]-d1;
            temp=m1+1;
            while(temp<=12){
                diff+=no_of_days[temp];
                temp++;
            }
            if(m1<=2 && leapYear(y1)){
                diff+=1; //leap year feb will have 29 days
            }
            temp=y1+1;
            while(temp<y2){
                if(leapYear(temp)){
                    diff+=366;
                }else{
                    diff+=365;
                }
                temp++;
            }
            temp=1;//january of y2
            while(temp<m2){
                diff+=no_of_days[temp];
                temp++;
            }
            diff+=d2;
            
        }
        else{
            if(m1==m2){//same month of same year
                diff+=(d2-d1);
            }else{
                diff+=no_of_days[m1]-d1;
                temp=m1+1;
                if(m1<=2 && leapYear(y1)){
                    diff+=1; //leap year feb will have 29 days
                }
                while(temp<m2){
                    diff+=no_of_days[temp];
                    temp++;
                }
                diff+=d2;
            }
        }
        printf("Difference between the 2 days is: %d days",diff);

    }else{
        printf("\n Invaild Date");
    }
    return 0;
}