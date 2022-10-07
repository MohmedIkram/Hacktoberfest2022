#include <stdio.h>
#include <stdlib.h>
#include <string.h>
struct student{
char name[20];
int rollno;
int avgmark;
};
int main()
{
struct student stud;
char n[20];
printf("enter name of student:");
scanf("%s",n);
strcpy(stud.name,n);
printf("enter rollno. of student:");
scanf("%d",&stud.rollno);
printf("enter average marks obtained student:");
scanf("%d",&stud.avgmark);
printf("name:%s\trollno:%d\tavgmark:%d",stud.name,stud.rollno,stud.avgmark);
return 0;
}