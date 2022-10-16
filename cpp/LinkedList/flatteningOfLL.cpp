// C++ code for flattening a linked list
#include <bits/stdc++.h>
using namespace std;

// creating Linked list Node
struct Node {
	int data;
	struct Node* next;
	struct Node* bottom;

	Node(int x)
	{
		data = x;
		next = NULL;
		bottom = NULL;
	}
};

// comparator function for priority queue
struct mycomp {
	bool operator()(Node* a, Node* b)
	{
		return a->data > b->data;
	}
};

void flatten(Node* root)
{
	priority_queue<Node*, vector<Node*>, mycomp> p;
	// pushing main link nodes into priority_queue.
	while (root != NULL) {
		p.push(root);
		root = root->next;
	}

	// Extracting the minimum node
	// while priority queue is not empty
	while (!p.empty()) {

		// extracting min
		auto k = p.top();
		p.pop();

		// printing least element
		cout << k->data << " ";
		if (k->bottom)
			p.push(k->bottom);
	}
}

// Driver's code
int main(void)
{
	// This code builds the flattened linked list
	// of first picture in this article ;
	Node* head = new Node(5);
	auto temp = head;
	auto bt = head;
	bt->bottom = new Node(7);
	bt->bottom->bottom = new Node(8);
	bt->bottom->bottom->bottom = new Node(30);
	temp->next = new Node(10);

	temp = temp->next;
	bt = temp;
	bt->bottom = new Node(20);
	temp->next = new Node(19);
	temp = temp->next;
	bt = temp;
	bt->bottom = new Node(22);
	bt->bottom->bottom = new Node(50);
	temp->next = new Node(28);
	temp = temp->next;
	bt = temp;
	bt->bottom = new Node(35);
	bt->bottom->bottom = new Node(40);
	bt->bottom->bottom->bottom = new Node(45);

	// Function call
	flatten(head);
	cout << endl;
	return 0;
}
// this code is contributed by user_990i
