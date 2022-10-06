//Stack operations using Linked List
#include<stdio.h>
#include<stdlib.h>
struct node
{
    int data;
    struct node *next;
};
typedef struct
{
    struct node * top;
}STACK;

int push(STACK *s,int v)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));
    if(temp==NULL)
    {
        printf("Overflow");
        return 1;
    }
    temp->data=v;
    temp->next=s->top;
    s->top=temp;
    return 0;
}
int pop(STACK *s,struct node **v)
{
    struct node *temp;
    if(s->top==NULL)
    {
        printf("Underflow");
        return 1;
    }
    temp=s->top;
    s->top=temp->next;
    *v=temp;
    return 0;
}
int Bracket(char ex[], STACK *s)
{
    struct node *m;
    int i=0;
    while(ex[i])
    {
      if (ex[i] == '{' || ex[i] == '(' || ex[i] == '[')
      {
            int p=push(&s,(int)ex[i]);
      }
      if (ex[i] == '}' || ex[i] == ')' || ex[i] == ']')
        {
            if(s==NULL)
            {
              return 0;
            }
            else
            {
                pop(&s,&m);
                int a= ex[i]==')' && m->data == '(';
                int b= ex[i]=='}' && m->data == '{';
                int c= ex[i]==']' && m->data == '[';
                if(!(a || b || c))
                    return 0;
            }
          }
          i++;
      }
      if(s->top==NULL)
        return 1;
      else
        return 0;
}
int main()
{
    STACK s1;
    s1.top = NULL;
    char ex[100];
    gets(ex);
    int a=Bracket(ex, &s1);
    if(a==1)
      printf("Balanced\n");
    else
      printf("Unbalanced\n");
}
