//Program to display the top view of a binary tree
#include<bits/stdc++.h>
#include<iostream>
using namespace std;
//Tree
struct Node
{
    int data;
    struct Node *left;
    struct Node *right;

    Node(int val) {
        data = val;
        left = NULL;
        right = NULL;
    }
};


//Function to dsply top view/
void topView(struct Node * root)
{
    if (root == NULL)
        return;

    queue<pair<struct Node*, int>>q;
    map<int, int> mp;
    int d;
    q.push({root, 0});
    Node *temp = NULL;

    while (!q.empty())
    {
        temp = q.front().first;
        d = q.front().second;


        if (mp.find(d) == mp.end())
        {
            mp[d] = temp->data;
        }

        if (temp->left)
        {
            q.push({temp->left, d - 1});  

        }
        if (temp->right)
        {
            q.push({temp->right, d + 1}); 

        }
        q.pop();
    }
    for (auto i = mp.begin(); i != mp.end(); i++)
        cout << i->second << " ";



}


int main()
{
    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->right = new Node(7);


    cout << "The top view of the tree is : " << endl;
    topView(root);

    return 0;
}


//Expected Output:

 /*
                    1
                   / \
                  2   3
                 / \   \
                4   5   7
        Expected-> 4 2 1 3 7
    */
