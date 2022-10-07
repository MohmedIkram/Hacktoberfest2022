#include <stdio.h>
void pfactors(int, int);
int main()
{
  int n;
  printf("Enter a number-");
  scanf("%d", &n);
  pfactors(n, 2);
  return 0;
}
void pfactors(int num, int count)
{
  if (num < 1)
    return;
  else if (num % count == 0)
  {
    printf("%d\n", count);
    pfactors(num / count, count);
  }
  else
  {
    pfactors(num, count + 1);
  }
}