#include <stdio.h>

int main() {
  int numbers[100], size, counter, position = 0;

  printf("Enter number length : ");
  scanf("%d", &size);

  printf("Enter %d number\n", size);
  
  printf("\n");

  printf("---- Start ----\n");
  
  for (counter = 0; counter < size; counter++) {
  	printf("Enter number %i : ", counter+1);
  	scanf("%d", &numbers[counter]);
  }

  for (counter = 1; counter < size; counter++) {
  	if (numbers[counter] > numbers[position]) {
  		position = counter;
  	}
  }
  
  printf("\n");

  printf("Maximum number is in position %d and it value is %d.\n", position+1, numbers[position]);
  return 0;
  }
