#include<iostream>
using namespace std;

class Circular_Queue
{
		public:
		int front;
		int rear;
		int arr[5];
		int itemcount;

	  Circular_Queue() {
	  itemcount=0;
      front = -1;
      rear = -1;
    }
  bool isEmpty() {
    if (front == -1 && rear == -1)
      return true;
    else
      return false;
  }
  bool isFull() {
    if ((rear+1)%5==front)
      return true;
    else
      return false;
  }
  void enqueue(int val) {
    if (isFull()) {
      cout << "\n Queue full !! Overflow"<<endl;
      return;
    } 
	else if (isEmpty()) {
      rear = 0;
      front = 0;
      arr[rear] = val;
    } 
	else {
      rear=(rear+1)%5;
      arr[rear] = val;
    }
 	
 	itemcount++;
  }
 
  int dequeue() {
    int x = 0;
    if (isEmpty()) {
      cout << "\n Queue is Empty !! Underflow"<<endl;
      return x;
    } 
	else if (rear == front) {
      x = arr[rear];
      rear = -1;
      front = -1;
      itemcount--;
      return x;
    } 
	else {
      
      x = arr[front];
      arr[front] = 0;
      front=(front+1)%5;
      itemcount--;
      return x;
    }
  }
 
  int count() {
    return (itemcount);
  }
 
  void display() {
    if(front==-1 && rear==-1)
    {
    	cout<<"\n Queue is empty !!";
	}
	else
	{
	cout << "\n Values in the Queue are : ";
    
	int i=front;
	while(i!=rear)
	{
		cout<<arr[i]<<"\t";
		i=(i+1)%5;
	}
	cout<<arr[rear]<<endl;
	}
	
  }
		
};

int main()
{
	int n,value;
	Circular_Queue q1;
	cout << "\n Enter 0 to exit." << endl;
    cout << "1. Enqueue()" << endl;
    cout << "2. Dequeue()" << endl;
    cout << "3. isEmpty()" << endl;
    cout << "4. isFull()" << endl;
    cout << "5. count()" << endl;
    cout << "6. display()" << endl;
	do{
	
	cout<<"\n What operation you want to perform : ";
	cin>>n;
	switch(n)
	{
		case 0:
      break;
    case 1:
      
	  cout << "\n Enter an item to Enqueue in the Queue" << endl;
      cin >> value;
      q1.enqueue(value);
      
      break;
    case 2:
      int a;
      a=q1.dequeue();
      if(a!=0)
      {
      	cout << "\n Dequeued Value : " << a << endl;
	  }
	  
      break;
    case 3:
      if (q1.isEmpty())
        cout << "\n Queue is Empty" << endl;
      else
        cout << "\n Queue is not Empty" << endl;
      break;
    case 4:
      if (q1.isFull())
        cout << "\n Queue is Full" << endl;
      else
        cout << "\n Queue is not Full" << endl;
      break;
    case 5:
      cout << "\n Count of items in Queue : " << q1.count() << endl;
      break;
    case 6:
      //cout << "\n Display Function Called " << endl;
      q1.display();
      break;
    default:
      cout << "\n Select Proper Option !! " << endl;
    }
	} while (n != 0);
	
		
}
