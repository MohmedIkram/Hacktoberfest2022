#include<bits/stdc++.h>
using namespace std;

template<typename T>
class BinaryTreeNode{
    public:
    T data;
    BinaryTreeNode* left;
    BinaryTreeNode* right;

    BinaryTreeNode(int data){
        this->data = data;
        left = NULL;
        right = NULL;
    }

    ~BinaryTreeNode(){
        delete left;
        delete right;
    }
};

void printTree(BinaryTreeNode<int>* root){
    if(!root)return;
    cout<<root->data<<" : ";
    if(root->left)cout<<"L "<<root->left->data<<"  ";
    if(root->right)cout<<"R "<<root->right->data;
    cout<<endl;
    printTree(root->left);
    printTree(root->right);
}

BinaryTreeNode<int>* takeInput(){ // this takes the input but it's very painful to input data
    int rootData;
    cout<<"Enter Data "<<endl;
    cin>>rootData;
    if(rootData == -1)return NULL;

    BinaryTreeNode<int>* root = new BinaryTreeNode<int>(rootData);
    BinaryTreeNode<int>* leftChild = takeInput();
    BinaryTreeNode<int>* rightChild = takeInput();

    root -> left = leftChild;
    root -> right = rightChild;
    return root;
}

BinaryTreeNode<int>* takeInputLevelWise(){
    int rootData = 0;
    cout<<"Enter root data: "<<endl;
    cin>>rootData;
    if(rootData == -1)return NULL;
    BinaryTreeNode<int>* root = new BinaryTreeNode<int>(rootData);

    queue<BinaryTreeNode<int>*> pendingNodes;
    pendingNodes.push(root);
    while(!pendingNodes.empty()){
        BinaryTreeNode<int>* front = pendingNodes.front();
        pendingNodes.pop();

        int leftChild;
        cout<<"Enter left child of "<<front->data<<endl;
        cin>>leftChild;
        if(leftChild != -1){
            BinaryTreeNode<int>* leftNode = new BinaryTreeNode<int>(leftChild);
            front->left = leftNode;
            pendingNodes.push(leftNode);
        }

        int rightChild;
        cout<<"Enter right child of "<<front->data<<endl;
        cin>>rightChild;
        if(rightChild != -1){
            BinaryTreeNode<int>* rightNode = new BinaryTreeNode<int>(rightChild);
            front->right = rightNode;
            pendingNodes.push(rightNode);
        }
    }
    return root;
}

void printTreeLevelOrder(BinaryTreeNode<int>* root){
    cout<<endl<<"Printing tree in level order: "<<endl;
    if(!root)return;

    queue<BinaryTreeNode<int>*> pendingNodes;
    pendingNodes.push(root);

    while(!pendingNodes.empty()){
        BinaryTreeNode<int>* front = pendingNodes.front();
        pendingNodes.pop();

        cout<<front->data<<" : ";

        if(front->left){
            cout<<"L:"<<front->left->data<<" , ";
            pendingNodes.push(front->left);
        }
        else{
            cout<<"L:"<<"_"<<" , ";
        }

        if(front->right){
            cout<<"R:"<<front->right->data<<endl;
            pendingNodes.push(front->right);
        }
        else{
            cout<<"R:"<<"_"<<endl;
        }
    }
}

bool isNodePresent(BinaryTreeNode<int> *root, int x) { //coded in codestudio
    if(!root)return false;
    if(root->data == x){
        return true;
    }
    bool left = isNodePresent(root -> left, x);
    bool right = isNodePresent(root -> right, x);
    return left||right;
}

void mirror(BinaryTreeNode<int>* node) {
    if(!node)return;
    
    mirror(node->left);
    mirror(node->right);
    
    BinaryTreeNode<int>* temp = node->left;
    node->left = node->right;
    node->right = temp;
}

void preorderTraversal(BinaryTreeNode<int>* root) {
    if(!root)return;
    
    cout<<root->data<<" ";
    preorderTraversal(root->left);
    preorderTraversal(root->right);
}

void postorderTraversal(BinaryTreeNode<int>* root) {
    if(!root)return;
    
    postorderTraversal(root->left);
    postorderTraversal(root->right);
    cout<<root->data<<" ";
}

void inorderTraversal(BinaryTreeNode<int>* root) {
    if(!root)return;
    inorderTraversal(root->left);
    cout<<root->data<<" ";
    inorderTraversal(root->right);
}

void dfs(BinaryTreeNode<int>* root , pair<int,int>& minMax){
    if(!root)return;
    minMax.first = min(minMax.first, root->data);
    minMax.second = max(minMax.second, root->data);
    
    dfs(root->left, minMax);
    dfs(root->right, minMax);
}
pair<int, int> getMinAndMax(BinaryTreeNode<int> *root) {
    if(!root)return {0,0};
    pair<int,int> minMax {INT_MAX,INT_MIN};
    
    dfs(root, minMax);
    return minMax;
}

int sumOfNodes(BinaryTreeNode<int>* root) {
    if(!root)return 0;
    int left = sumOfNodes(root->left);
    int right = sumOfNodes(root->right);
    return root->data + left + right;
}

BinaryTreeNode<int>* removeLeafNodes(BinaryTreeNode<int>* root){
    if(!root)return NULL;

    if(!root->left && !root->right){
        delete(root);
        return NULL;
    }
    
    root->left = removeLeafNodes(root->left);
    root->right = removeLeafNodes(root->right);

    return root;
}

int main(){
    BinaryTreeNode<int>* root = new BinaryTreeNode<int>(1);
    BinaryTreeNode<int>* node1 = new BinaryTreeNode<int>(2);
    BinaryTreeNode<int>* node2 = new BinaryTreeNode<int>(3);
    root->left = node1;
    root->right = node2;

    BinaryTreeNode<int>* root = takeInput();

    BinaryTreeNode<int>* root = takeInputLevelWise();
    // printTree(root);

    printTreeLevelOrder(root);

    int x = 3;
    cout<<"Node "<<x<<" is "<<(isNodePresent(root, x)?"":"not ")<<"present in the tree"<<endl;

    mirror(root);
    printTreeLevelOrder(root);

    cout<<endl<<"Preorder: ";
    preorderTraversal(root);
    cout<<endl<<"Postorder: ";
    postorderTraversal(root);
    cout<<endl<<"Inorder: ";
    inorderTraversal(root);
    cout<<endl;

    cout<<"Min: "<<getMinAndMax(root).first<<" "<<"Max: "<<getMinAndMax(root).second<<endl;

    cout<<sumOfNodes(root)<<endl;

    root = removeLeafNodes(root);
    cout<<"After - Remove leaf nodes: ";
    printTreeLevelOrder(root);

    delete root;

    return 0;
}

// Sample tree inputs
// 1 2 3 4 5 6 7 -1 -1 -1 -1 -1 -1 -1 -1
// 8 3 10 1 6 -1 14 -1 -1 4 7 13 -1 -1 -1 -1 -1 -1 -1
