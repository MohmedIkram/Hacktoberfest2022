// Name: Lívia Gomes

// Username: liviagomes30


#include<stdio.h>

/* C code to calculate the area of a triangle */

int main ()
{
    float base, height, area;

    printf ("Enter the value of the triangle base:  ");
    scanf("%f", &base);

    printf ("Enter the value of the height of the triangle:  ");
    scanf("%f", &height);

    area = (base*height)/2;

    printf("Area: %f", area);
    return 0;
}
