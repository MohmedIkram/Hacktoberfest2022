#include<iostream>
using namespace std;

class Node
{
	private:
		int val;
		Node *nextNode;
	
	public:
		void setVal(int v)
		{
			val = v;
		}
		int getVal()
		{
			return val;
		}
		
		void setNextNode(Node *next)
		{
			nextNode = next;
		}
		Node* getNextNode()
		{
			return nextNode;
		}
		
};

class LList
{
	private:
		Node *head;
		Node *last;
		Node *current;
		int size;
	
	public:
		
		LList()
		{
			head = new Node();
			current = head;
			last = head;
			size = 0;
		}
		
		void addToEndOfList(int v)
		{
			//create a new node object
			Node *temp = new Node();
			temp->setVal(v);
			temp->setNextNode(NULL);
			
			//attach it to the list
			last->setNextNode(temp);
			last = temp;
			size++;
		}
		
		void addNodeToCurrent(int v)
		{
			Node *tempNode = new Node();
			tempNode->setVal(v);
			
			tempNode->setNextNode(current->getNextNode()); 
			current->setNextNode(tempNode);
			current = tempNode;
			
			size++;
			//List is empty - remember our head node is a dummy
			//if it is inserted somewhere in the middle of list
			//current is at the end of the list
		}
		
		void printList()
		{
			Node *TCurrent = head->getNextNode();
			for(int i=0; i<size; i++)
			{
				cout<<TCurrent->getVal()<<" ";
				TCurrent = TCurrent->getNextNode();
			}
		}
		
		void moveCurrentToLast()
		{
			if(size!=0)
			{
				while(current->getNextNode() != NULL)
				{
					current = current->getNextNode();
				}
			}
		}
		
		void moveCurrentToFirst()
		{
			if(size!=0)
			{
				current = head->getNextNode();
			}
		}
		
		void moveCurrentToHead()
		{
			current = head;
		}
};

int main()
{
	LList myList;
	myList.addToEndOfList(10);
	myList.addToEndOfList(20);
	myList.addToEndOfList(30);
	myList.addToEndOfList(40);
	myList.addToEndOfList(50);
	
	myList.addNodeToCurrent(5);
	myList.addNodeToCurrent(8);
	
	myList.moveCurrentToHead();
	myList.addNodeToCurrent(4);
	
	myList.printList();
	
}