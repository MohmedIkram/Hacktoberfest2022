// WAP to sort and remove duplicates from a linked list.
#include <stdio.h>
#include <stdlib.h>

struct node
{
    int info;
    struct node *link;
    struct node *head;
};
struct node *create(struct node *head)
{
    //create with recursive function
    struct node *temp;
    int num;
    printf("Enter the data (-1 to exit): ");
    scanf("%d", &num);
    if (num == -1)
    {
        return head;
    }
    temp = (struct node *)malloc(sizeof(struct node));
    temp->info = num;
    temp->link = NULL;
    if (head == NULL)
    {
        head = temp;
    }
    else
    {
        temp->link = head;
        head = temp;
    }
    head = create(head);
    return head;
}

void linkedlistTraversal(struct node *temp)
{
    if (temp == NULL)
    {
        printf("\nThe linked list is empty\n");
    }
    else
    {
          linkedlistTraversal(temp->link); //traversing in reverse order (use while loop for normal order)
            printf("%d\n", temp->info);
            
          
    }
}   

struct node *sort(struct node *head)
{
    struct node *temp=head;
    struct node *temp2=head->link;
    while(temp->link!=NULL)
    {
        if(temp->info<temp2->info)
        {
            int temp3=temp->info;
            temp->info=temp2->info;
            temp2->info=temp3;
            temp=head;
            temp2=head->link;
        }
        else
        {
            temp=temp->link;
            temp2=temp2->link;
        }
    }
    return head;
}

struct node *removeDuplicates(struct node *head)
{
    struct node *temp = head;
    struct node *temp2 = head->link;
    while (temp->link != NULL)
    {
        if (temp->info == temp2->info)
        {
            temp->link = temp2->link;
            free(temp2);
            temp2 = temp->link;
        }
        else
        {
            temp = temp->link;
            temp2 = temp2->link;
        }
    }
    return head;
}



int main(void)
{
    struct node *head = NULL;
    head = create(head);
    linkedlistTraversal(head);
    head=sort(head);
    head = removeDuplicates(head);
    linkedlistTraversal(head);
    return 0;
}
