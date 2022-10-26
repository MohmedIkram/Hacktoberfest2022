#include<bits/stdc++.h>
using namespace std;
class node
{
public:
	int data;
	node *left;
	node *right;
	node(int d)
	{
		data=d;
		left=NULL;
		right=NULL;
	}
};
int build(node *root)
{
    if(root==NULL)
    return 0;
    
    if(root->left==NULL && root->right==NULL)
    {
        int g=root->data;
        root->data=0;
        return g;
    }
    
    int a=build(root->left);
    int b=build(root->right);
    int d=root->data;
    int c=a+b;
    root->data=c;
    return (d+c);
}
void toSumTree(node *root)
{
    int x=build(root);
}
void inorder(node* root)
{
    if(root==NULL)
        return;
    inorder(root->left);
    cout<<root->data<<" ";
    inorder(root->right);
}
int main()
{
	node *root=new node(30);
	root->left=new node(20);
	root->right=new node(50);
	root->left->left=new node(10);
	root->right->left=new node(40);
	root->right->right=new node(60);
	root->right->right->right=new node(70);
    toSumTree(root);
    inorder(root);
	return 0;
}
