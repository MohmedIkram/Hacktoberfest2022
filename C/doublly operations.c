/*
WAP to perform the following operations in a double linked head by using suitable user defined
    for each case.
    a)  traverse forward
    b)  traverse backward
    c)  check if the linked head in empty.
    d)  insert the node at any position(begining/mid/end)
    e)  delete the node at any position(begining/mid/end)
    f)  delete the node for any given key.
    g)  count the total number of nodes.
    h)  search in the linked head.
    Validate and verify each function from the main method.*/

#include <stdio.h>
#include <stdlib.h>
typedef struct node
{
    struct node *prev;
    int data;
    struct node *next;
} node;

node *create(node *head)
{
    head = NULL;
    node *M = NULL;
    node *N = NULL;
    int num_nodes, i;
    printf("Enter the no. of nodes you want to create");
    scanf("%d", &num_nodes);
    for (i = 0; i < num_nodes; i++)
    {
        if (head == NULL)
        {
            N = (struct node *)malloc(sizeof(struct node));
            printf("\n List is empty");
            printf("\n Enter the value to be kept at 1st node");
            scanf("%d", &N->data);
            N->prev = NULL;
            N->next = NULL;
            head = N;
        }
        else
        {
            M = (struct node *)malloc(sizeof(struct node));
            printf("\n Enter the value to be kept in %d node", i + 1);
            scanf("%d", &M->data);
            M->next = NULL;
            N->next = M;
            M->prev = N;
            N = M;
        }
    }
    return head;
}

node *traversal(node *head)
{
    node *ptr = head;
    printf("The list is: ");
    while (ptr != NULL)
    {
        printf("%d ", ptr->data);
        ptr = ptr->next;
    }
    return head;
}

void empty(node *head)
{
    if (head == NULL)
        printf("The list is empty\n");
    else
        printf("The list is not empty\n");
}

node *insert_begin(node *head, node *newnode)
{
    newnode->prev = NULL;
    newnode->next = head;
    head->prev = newnode;
    head = newnode;
    return head;
}

node *insert_mid(node *head, node *newnode, int pos)
{
    node *ptr = head;
   if (pos == 1)
    {
       head=insert_begin(head, newnode);
       return head;
    }
    else
    {
        for(int i=1; i<pos-1; i++)
        {
            ptr=ptr->next;
        }
        newnode->next=ptr->next;
        ptr->next->prev=newnode;
        ptr->next=newnode;
        newnode->prev=ptr;
        return head;
    }
}

void insert_end(node *head)
{
    node *temp = (node *)malloc(sizeof(node));
    int b;
    printf("Enter the data you want to enter in the new node ");
    scanf("%d", &b);
    while (head->next != NULL)
        head = head->next;
    temp->data = b;
    temp->next = head->next;
    temp->prev = head;
    head->next = temp;
}

node *delete_begin(node *head)
{

    node *temp = (node *)malloc(sizeof(node));

    temp = head->next;
    free(head);
    head = temp;
    head->prev = NULL;
    return head;
}
void delete_mid(node *head, int a)
{ 

    node *temp = (node *)malloc(sizeof(node));
    for (int i = 0; i < a - 2; i++)
        head = head->next;
    temp = head->next;
    head->next = temp->next;
    head->next->prev = temp->prev;
    free(temp);
}

void delete_end(node *head)
{
     node *temp = (node *)malloc(sizeof(node));
    while (head->next->next != NULL)

        head = head->next;
    temp = head->next;
    head->next = NULL;

    // head->next=head->next->next;
    //  head->next->next->prev=temp->prev;
    free(temp);
}

void deletekey(node *head, int info)
{
    //deleting the node with the given key
    node *temp = head;
    while (temp->data != info)
    {
        temp = temp->next;
    }
    temp->prev->next = temp->next;
    temp->next->prev = temp->prev;
    free(temp);
}

int count(node *head, int c)
{
    while (head != NULL)
    {
        c++;
        head = head->next;
    }
    return c;
}

void search(node *head, int info)
{
    int c = 0;
    while (head->next != NULL)
    {
        if (head->data == info)
            c++;
        head = head->next;
    }

    if (c > 0)
        printf("The element entered is found in the head\n");
    else
        printf("The element entered is not found in the head\n");
}

void transversal_b(node *head)
{
    node *last = traversal(head);
    while (last->prev->prev != NULL)
    {

        printf("%d \n", last->data);
        last = last->prev;
    }
}

void main()
{
    node *head = NULL;
    head = (node *)malloc(sizeof(node));
    head = create(head);
    printf("1.traversal \n");
    printf("2.Check if list is empty \n");
    printf("3.Insert the node at beginnig \n ");
    printf("4.Insert the node at given position \n ");
    printf("5.Insert the node at end \n ");
    printf("6.Delete the node at begining \n");
    printf("7.Delete the node at given position \n");
    printf("8.Delete the node at end \n");
    printf("9.Delete the node for a given key \n");
    printf("10.Count the number of nodes \n");
    printf("11.Search an element \n");
    printf("12.Traverse backwards \n");
    printf("13.Exit \n");

    int c;
    do
    {
        printf("\nEnter the character for you given choice \n");

        scanf("%d", &c);
        int a, b;

        switch (c)
        {
        case 1:
            head = traversal(head);
            break;

        case 2:
            empty(head);
            break;

        case 3:
            node *newnode;
            printf("\nEnter the new node info:");
            newnode = (struct node *)malloc(sizeof(struct node));
            scanf("%d", &newnode->data);
            printf("After insertion the new linked list is\n");
            head = insert_begin(head, newnode);
            traversal(head);
            break;

        case 4:
            int pos;
            printf("Enter the position you want to enter the new node ");
            scanf("%d", &pos);
            printf("\nEnter the new node info:");
            scanf("%d", &newnode->data);
            head=insert_mid(head, newnode, pos);
            printf("After insertion the new linked list is\n");
            traversal(head);
            break;

        case 5:
            insert_end(head);
            printf("After insertion the new linked head is\n");
            traversal(head);

            break;

        case 6:
            head = delete_begin(head);

            printf("After deletion the new linked head is\n");
            traversal(head);

            break;

        case 7:
            printf("Enter the position you want to delete ");
            scanf("%d", &a);
            delete_mid(head, a);
            printf("After deletion the new linked list is\n");
            traversal(head);

            break;

        case 8:
            delete_end(head);
            printf("After deletion the new linked list is\n");
            traversal(head);

            break;

        case 9:
            printf("Enter the data whose node is to be deleted ");
            scanf("%d", &a);
            deletekey(head, a);
            printf("After deletion the new linked head is\n");
            traversal(head);
            break;
        case 10:
            printf("The number of nodes in the linked list is %d \n", count(head, 0));
            break;
        case 11:
            printf("Enter the element you want to search ");
            scanf("%d", &a);
            search(head, a);
            break;
        case 12:
            printf("After traversal backwards \n");
            transversal_b(head);
            break;
        case 13:
            printf("Exiting the program \n");
            break;
        default:
            printf("Wrong choice\n");
        }
    } while (c < 13);
}