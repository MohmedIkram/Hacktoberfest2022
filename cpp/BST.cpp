#include<iostream>
using namespace std;
class BSTnode
{
public:
	int info;
	BSTnode * left;
	BSTnode* right;
	BSTnode()
	{
		info = 0;
		left = right = NULL;
	}
};
class BST
{
public:
	BSTnode* root;
	int lcount;
	int ncount;
	void insert(BSTnode*, BSTnode*);
	void preorder(BSTnode*);
	void postorder(BSTnode*);
	void inorder(BSTnode*);
	void display(BSTnode*, int);
	bool search( BSTnode* );
	void count(BSTnode* );
	void mirror(BSTnode*);
	int maxH(BSTnode*);
	void printLevelOrder(BSTnode *);
	void printGivenOrder(BSTnode *, int);
	void deleteByMerging(BSTnode*&);
	void findAndDeleteByMerging(int);
	void deleteByCopying(BSTnode*&);
	void findAndDeleteByCopying(int);
	void search_merge( BSTnode*);
	BST()
	{
		root = NULL;
		lcount = 0;
		ncount = 0;
	}
};
void BST::search_merge( BSTnode* n)
{
	BSTnode* p = root;
	while (p != NULL)
	{
		if (p->info == n->info)
		{
			cout << "\nKey Found";
			return;
		}
		else if (p->info < n->info)
			p = p->right;
		else
			p = p->left;
	}
	cout << "\n Key not found. Hence inserting .";
	insert(root, n);
}
void BST::deleteByMerging(BSTnode*& node)
{
	BSTnode *tmp = node;
	if (node != 0)
	{
		if (!node->right)
			node = node->left;
		else if (node->left == 0)
			node = node->right;
		else
		{
			tmp = node->left;
			while (tmp->right != 0)
				tmp = tmp->right;
			tmp->right = node->right;
			tmp = node;
			node = node->left;
		}
		delete tmp;
	}
}
void BST::findAndDeleteByMerging(int el)
{
	BSTnode *node = root, *prev = 0;
	while (node != 0)
	{
		if (node->info == el)
			break;
		prev = node;
		if (el < node->info)
			node = node->left;
		else node = node->right;
	}
	if (node != 0 && node->info == el)
		if (node == root)
			deleteByMerging(root);
		else if (prev->left == node)
			deleteByMerging(prev->left);
		else deleteByMerging(prev->right);
	else if (root != 0)
		cout << "\nElement" << el << "is not in the tree\n";
	else cout << "\nThe tree is empty\n";
}
void BST::findAndDeleteByCopying(int el)
{
	BSTnode *temp = root, *prev = 0;
	while (temp != 0)
	{
		if (temp->info == el)
			break;
		prev = temp;
		if (temp->info < el)
			temp = temp->right;
		else
			temp = temp->left;
	}
	if (temp != 0 && temp->info == el)
		if (temp == root)
			deleteByCopying(root);
		else if (prev->left == temp)
			deleteByCopying(prev->left);
		else
			deleteByCopying(prev->right);
	else if (root != 0)
		cout << "\ninfo" << el << "is not in the tree" << endl;
	else
		cout << "\nthe tree is empty" << endl;
}
void BST::deleteByCopying(BSTnode*& node)
{
	BSTnode *previous, *tmp = node;
	if (node->right == 0)
		node = node->left;
	else if (node->left == 0)
		node = node->right;
	else
	{
		tmp = node->left;
		previous = node;
		while (tmp->right != 0)
		{
			previous = tmp;
			tmp = tmp->right;
		}
		node->info = tmp->info;
		if (previous == node)
			previous->left = tmp->left;
		else
			previous->right = tmp->left;
	}
	delete tmp;
}
void BST:: printLevelOrder(BSTnode* n)
{
	int h = maxH(n);
	int i;
	for (int i = 1;i <= h;i++)
		printGivenOrder(n, i);
}
void BST::printGivenOrder(BSTnode *n, int level)
{
	if (n == NULL)
		return;
	if (level == 1)
		cout << n->info << "	";
	else if (level > 1)
	{
		printGivenOrder(n->left, level - 1);
		printGivenOrder(n->right, level - 1);
	}
}
void BST:: insert(BSTnode* tree, BSTnode* newnode)
{
	if (root == NULL)
	{
		root = newnode;
		return;
	}
	if (tree->info > newnode->info)
	{
		if (tree->left != NULL)
			insert(tree->left, newnode);
		else
			tree->left = newnode;
		return;
	}
	else
	{
		if (tree->right != NULL)
			insert(tree->right, newnode);
		else
			tree->right = newnode;
		return;
	}
}
void BST::preorder(BSTnode* n)
{
	if (root == NULL)
	{
		cout << "Tree is empty. Cannot Display...";
	}
	if (n != NULL)
	{
		cout << n->info << "	";
		preorder(n->left);
		preorder(n->right);
	}
}
void BST:: postorder(BSTnode* n)
{
	if (root == NULL)
	{
		cout << "Tree is empty. Cannot Display...";
	}
	if (n != NULL)
	{
		postorder(n->left);
		postorder(n->right);
		cout << n->info << "	";
	}
}
void BST::inorder(BSTnode* n)
{
	if (root == NULL)
	{
		cout << "Tree is empty. Cannot Display...";
	}
	if (n != NULL)
	{
		inorder(n->left);
		cout << n->info << "	";
		inorder(n->right);
	}
}
void BST:: display(BSTnode* ptr, int level)
{
	int i;
	if (ptr != NULL)
	{
		display(ptr -> right, level + 1);
		cout << endl;
		if (ptr == root)
			cout << "Root->: ";
		else
		{
			for (i = 0;i < level;i++)
				cout << "	 ";
		}
		cout << ptr->info;
		display(ptr->left, level + 1);
	}
}
bool BST:: search( BSTnode* n)
{
	BSTnode* ptr = root;
	while (ptr != NULL)
	{
		if (ptr->info == n->info)
			return 1;
		else  if (n->info < ptr->info)
			ptr = ptr->left;
		else
			ptr = ptr->right;
	}
	return 0;
}
void BST:: count(BSTnode* n)
{
	if (root == NULL)
	{
	}
	if (n != NULL)
	{
		count(n->left);
		if (n->left == NULL && n->right == NULL)
			lcount++;
		else
			ncount++;
		count(n->right);
	}
}
void BST:: mirror(BSTnode* m)
{
	if (m == NULL)
		return;
	else
	{
		BSTnode* temp;
		mirror(m->left);
		mirror(m->right);
		temp = m->left;
		m->left = m->right;
		m->right = temp;
	}
}
int BST::maxH(BSTnode* n)
{
	if (n == NULL)
		return 0;
	else
	{
		int lheight = maxH(n->left);
		int rheight = maxH(n->right);
		if (lheight > rheight)
			return lheight + 1;
		else
			return rheight + 1;
	}
}
int main()
{
	BST bst;
	int choice, h;
	BSTnode* temp;
	int t;
	bool f;
	char ch;
	do
	{
		cout << "\nMenu:";
		cout << "\n 1.Insert";
		cout << "\n 2.Preorder";
		cout << "\n 3.Postorder";
		cout << "\n 4.Inorder";
		cout << "\n 5.Display";
		cout << "\n 6.Count";
		cout << "\n 7.Search.";
		cout << "\n 8.Search Merge.";
		cout << "\n 9.Mirror";
		cout << "\n10.Height";
		cout << "\n11.BF traversal";
		cout << "\n12.Delete by Merging.";
		cout << "\n13.Delete by Copying.";
		cout << "\nEnter your choice:";
		cin >> choice;
		switch (choice)
		{
		case 1:
			temp = new BSTnode;
			cout << "\nEnter the info part for the node:";
			cin >> temp->info;
			bst.insert(bst.root, temp);
			break;
		case 2:
			cout << "\nPre order traversal";
			bst.preorder(bst.root);
			break;
		case 3:
			cout << "\nPost order traversal";
			bst.postorder(bst.root);
			break;
		case 4:
			cout << "\nIn order traversal";
			bst.inorder(bst.root);
			break;
		case 5:
			cout << "\nDisplaying elements";
			bst.display(bst.root, 1);
			break;
		case 6:
			bst.count(bst.root);
			cout << "\nLeaf count :" << bst.lcount;
			cout << "\nNon leaf count: " << bst.ncount;
			break;
		case 7:
			temp = new BSTnode;
			cout << "\nEnter the value to be searched :";
			cin >> temp->info;
			f = bst.search( temp);
			if (f == 1)
				cout << "Search successful";
			else
				cout << "Search unsuccessful";
			break;
		case 8:
			cout << "\nEnter the value to be searched :";
			cin >> temp->info;
			bst.search_merge(temp);
			break;
		case 9:
			cout << "\nBefore mirror";
			bst.display(bst.root, 1);
			cout << "\nAfter mirror";
			bst.mirror(bst.root);
			bst.display(bst.root, 1);
			break;
		case 10:
			h = bst.maxH(bst.root);
			cout << "Height of the tree is " << h;
			break;
		case 11:
			cout << "Breadth First Traversal";
			bst.printLevelOrder(bst.root);
			break;
		case 12:
			cout << "\nEnter the value to be deleted :";
			cin >> t;
			bst.findAndDeleteByMerging( t);
			break;
		case 13:
			cout << "\nEnter the value to be deleted :";
			cin >> t;
			bst.findAndDeleteByCopying( t);
			break;
		default:
			cout << "\nWrong Input";
		}
		//cout << "\nDo you want to continue?(y/n)";
		//cin >> ch;
	}
	while (1);
	return 0;
}

