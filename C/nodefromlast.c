//  WAP to print mth node from the last of a linked list of n nodes.

#include <stdio.h>
#include <stdlib.h>

struct node
{
    int info;
    struct node *link;
      struct node *head;
};


struct node *creation(struct node *head)
{
    // CREATING n NUMBER OF NODES

    struct node *M=NULL;
    struct node *N=NULL;
    int num_nodes, i;
    printf("Enter the no. of nodes you want to create:");
    scanf("%d", &num_nodes);
    for (i = 0; i < num_nodes; i++)
    {
        if (head == NULL)
        {
            N = (struct node *)malloc(sizeof(struct node));
            printf("\n List is empty");
            printf("\n Enter the value to be kept at 1st node: ");
            scanf("%d", &N->info);
            N->link = NULL;
            head = N;
        }
        else
        {
            M = (struct node *)malloc(sizeof(struct node));
            printf("\n Enter the value to be kept in %d node: ", i + 1);
            scanf("%d", &M->info);
            M->link = NULL;
            N->link = M;
            N = M;
        }
    }
    return head;

}


void nth_from_last(struct node *head, int m)
{
    struct node *temp=head;
    int l=0;
    if (head == NULL)
    {
        printf("\nThe linked list is empty\n");
    }
    else
    {
         
         while (temp != NULL)
        {
           
            temp = temp->link;
            l++;

        }
        if(m>l)
        {
            printf("Invalid input");
        }
        else
        {
            int i;
            for(i=0;i<l-m;i++)
            {
                head=head->link;
            }
            printf("Node %d from the last is %d",m,head->info);
        }
}}

int main()
{
    struct node *head = NULL;
   head= creation(head);
   printf("Enter the value of m");
    int m;
    scanf("%d", &m);
    nth_from_last(head, m); 
}