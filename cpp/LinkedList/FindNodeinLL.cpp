#include <iostream>
using namespace std;

class Node
{
public:
	int data;
	Node *next;
	Node(int data)
	{
		this->data = data;
		this->next = NULL;
	}
};


Node *takeinput()
{
	int data;
	cin >> data;
	Node *head = NULL, *tail = NULL;
	while (data != -1)
	{
		Node *newNode = new Node(data);
		if (head == NULL)
		{
			head = newNode;
			tail = newNode;
		}
		else
		{
			tail->next = newNode;
			tail = newNode;
		}
		cin >> data;
	}
	return head;
}

int findNode(Node *head, int n)
{
    //Write your code here
	if(head == NULL){
        return -1 ;
    }
    if(head->data == n){
        return 0;
    }
    Node* temp = head ;
    int count = 0;
    while(temp->data!=n && temp != NULL){
        temp = temp->next ;
        if(temp== NULL)
            return -1 ;
        count ++ ;
    }
    if(temp!=NULL){
        return count ;
    }
    else
        return -1 ;
}

int main()
{
	int t;
	cin >> t;
	while (t--)
	{
		Node *head = takeinput();
		int val;
		cin >> val;
		cout << findNode(head, val) << endl;
	}
}