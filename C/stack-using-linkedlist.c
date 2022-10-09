// Write a C program to implement the concept
// of stack using single linked list.

#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *next;
} NODE;

NODE *push(NODE *, int);
NODE *pop(NODE *);
void display(NODE *);

int main()
{
    NODE *top = NULL;
    display(top);
    top = pop(top);

    top = push(top, 11);
    top = push(top, 12);
    top = push(top, 13);
    top = push(top, 14);
    display(top);

    top = pop(top);
    top = pop(top);
    top = push(top, 15);
    display(top);

    return 0;
}

NODE *push(NODE *top, int val)
{
    NODE *newNode;
    newNode = (NODE *)malloc(sizeof(NODE));
    newNode->data = val;
    if (top == NULL)
    {
        newNode->next = NULL;
        top = newNode;
    }
    else
    {
        newNode->next = top;
        top = newNode;
    }
    return top;
}

NODE *pop(NODE *top)
{
    NODE *ptr;
    ptr = top;
    if (top == NULL)
        printf("Stack Underflow!\n");
    else
    {
        top = top->next;
        free(ptr);
    }
    return top;
}

void display(NODE *top)
{
    NODE *ptr;
    ptr = top;
    if (ptr == NULL)
    {
        printf("Stack is Empty\n");
        return;
    }
    printf("TOP");
    while (ptr != NULL)
    {
        printf(" -> %d", ptr->data);
        ptr = ptr->next;
    }
    printf(" -> NULL\n");
}

// OUTPUT
// Stack is Empty
// Stack Underflow!
// TOP -> 14 -> 13 -> 12 -> 11 -> NULL
// TOP -> 15 -> 12 -> 11 -> NULL
