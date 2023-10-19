// Github username: kashika1109
// Aim: Reverse LinkedList in C++
// Date: 10 October 2022

//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;


struct node
{
    int data;
    struct node* next;
    
    node(int x){
        data = x;
        next = NULL;
    }
    
};

/* Function to print linked list */
void printList(struct node *node)
{
    while (node != NULL)
    {
        printf("%d ", node->data);
        node = node->next;
    }
    printf("\n");
}


// } Driver Code Ends
/*
  Reverse a linked list
  The input list will have at least one element  
  Return the node which points to the head of the new LinkedList
  Node is defined as 
    struct node
    {
        int data;
        struct node* next;
    
        node(int x){
            data = x;
            next = NULL;
        }
    
    }*head;
*/

class Solution
{
    public:
    struct node *reverse (struct node *head, int k)
    { 
        // Complete this method
        node *temp=head,*prev=NULL,*NEXT=NULL;
        int count=0;
        int times=1;
        node *start=NULL;
        node *end=head;
        while(temp!=NULL){
            if(count<k){
            NEXT=temp->next;
            temp->next=prev;
            prev=temp;
            temp=NEXT;
            count++;
            }
            if(count==k && times==1){
                head=prev;
                times++;
            }
            if(count==k){
                count=0;
                if(start!=NULL){
                start->next=prev;
                }
                start=end;
                end=temp;
                prev=NULL;
            }
        }
        if(count<k && count!=0){
            start->next=prev;
        }
        return head;
    }
};


//{ Driver Code Starts.

/* Driver program to test above function*/
int main(void)
{
    int t;
    cin>>t;//input test cases
     
    while(t--)
    {
        struct node* head = NULL;
        struct node* temp = NULL;
        int n;
        cin >> n;
         
        for(int i=0 ; i<n ; i++)
        {
            int value;
            cin >> value;
            if(i == 0)
            {
                head = new node(value);
                temp = head;
            }
            else
            {
                temp->next = new node(value);
                temp = temp->next;
            }
        }
        
        int k;
        cin>>k;
        
        Solution ob;
        head = ob.reverse(head, k);
        printList(head);
    }
     
    return(0);
}


// } Driver Code Ends
