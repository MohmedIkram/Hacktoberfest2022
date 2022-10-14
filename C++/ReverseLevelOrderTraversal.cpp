#include<iostream>
#include<stdlib.h>
#include<algorithm>
#include<climits>
#include<queue>
#include<stack>
using namespace std;

//definning the structure of the node of the binary tree
struct node 
{
    int data;
    struct node *left,*right;
    node(int val)
    {
        data = val;
        left = NULL;
        right = NULL;
    }
};

//creating a binary tree using recursion
struct node *create()
{
    int data;
    cout<<"Enter data : ";
    cin>>data;
    if(data==-1)
    {
        return 0;
    }
    else
    {
        struct node *temp = new node(data);
        cout<<"Enter the left of "<<data<<" : ";
        temp->left = create();
        cout<<"Enter the rigt of "<<data<<" : ";
        temp->right = create();
        return temp;
    }
}

//preorder traversal
void display(struct node *root)
{
    if(root)
    {
        cout<<root->data<<endl;
        display(root->left);
        display(root->right);
    }
}

//time complexity : O(n)
//space complexity : O(n)
void ReverseLevelOrder(struct node *root)
{
    if(root==NULL)
    {
        cout<<"Binary Tree is empty....!"<<endl;
        return;
    }

    queue<struct node *> q;
    stack<struct node *> s;
    struct node *temp = NULL;
    q.push(root);
    while(!q.empty())
    {
        temp = q.front();
        q.pop();

        if(temp->right)
            q.push(temp->right);
        if(temp->left)
            q.push(temp->left);
        s.push(temp);
    }

    //stack contains the nodes in the reverse level order
    //emptying the stack
    while(!s.empty())
    {
        temp = s.top();
        cout<<temp->data<<endl;
        s.pop();
    }
}


//main function
int main()
{
    struct node *root = NULL;
    int temp;
    root = create();
    display(root);
    cout<<"\n\nReverse Level Order Traversal"<<endl;
    ReverseLevelOrder(root);   
    return 0;
}
