#include <stdio.h>
struct student{
    int rn;
    char name[20];
    char address[20];
    int marks;
};

int main() {
    struct student s[10];
    int i;
    printf("Enter roll no, name, address, and marks of 4 students : \n");
    for(i=0; i<4; i++) {
        scanf("%d %s %s %d", &s[i].rn, s[i].name, s[i].address, &s[i].marks);
    }

    printf("Roll No \t Name \t Address \t Address \n");
    for(i=0; i<4; i++) {
        printf("%d \t %s \t %s \t %d \n", s[i].rn, s[i].name, s[i].address, s[i].marks);
    }

    return 0;
}