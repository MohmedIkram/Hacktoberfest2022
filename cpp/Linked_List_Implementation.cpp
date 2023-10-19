// Complete Implementation of Linked list
// By Mohammed Amaan Khan
#include <bits/stdc++.h>
#include <iostream>
using namespace std;

// Creating a node
class Node {
    public:
    int data;
    Node* next;

    Node(int data){
        this -> data = data;
        next = NULL;
    }
};


// implementing take input function
Node *takeInput(){
    cout<<"Enter the Linked List elements terminated by '-1' : ";
    int data;
    cin>>data;
    Node *head = NULL;
    Node *tail = NULL;
    while(data != -1){
        Node *newNode = new Node(data);
        if(head == NULL){
            head = newNode;
            tail = newNode;
        }
        else{
            tail->next = newNode;
            tail = newNode;
            // OR tail = tail->next;
            // cout<<"tail: "<<tail<<endl;
        }
        cin >> data;
    }
    return head;
}


// Printing the list with the help of head node
void print(Node *head){
  Node *temp = head;
  cout<<"List's elements are: "<<endl;
  while(temp != NULL){
      cout<<temp->data<<" ";
      temp = temp->next;
  }
  cout<<endl;
}


// counting no. of elements in the list
int count(Node *head){
    int cnt = 0;
    Node *temp = head;
    while(temp != NULL){
        cnt++;
        temp = temp -> next;
    }
    return cnt;
}


// returning ith element of the linked list
int ithElement(Node *head,int num){
    Node *temp = head;
    int cnt = 0;
    while(temp != NULL){
        if(num == cnt) return temp -> data;
        temp = temp -> next;
        cnt++;
    }
    return -1;
}


// function to insert a new node at index i
Node *insertNode(Node *head, int i , int data){
    Node *newNode = new Node(data);
    Node *temp = head;
    if(i == 0){
        newNode -> next = head;
        head = newNode;
        return head;
    }
    int cnt = 0;
    while(temp != NULL && cnt < i - 1){
        temp = temp -> next;
        cnt++;
    }
    if(temp != NULL){
    newNode -> next = temp -> next;
    temp -> next = newNode;
    }
    return head;
}


// delete a node at i
Node *deleteNode(Node *head, int i){
    Node *temp = head;
    int cnt = 0;
    // Node *del;
    if(i == 0){
        head = head -> next;
        return head;
    }
    while(temp != NULL && cnt < i - 1){
        temp = temp -> next;
        cnt++;
    }
    if(temp != NULL){
        temp -> next = temp -> next -> next;
    }
    // delete del;
    return head;
}


// length of list by recursion
int lenghtofLLRec(Node *temp, int cnt){
    if(temp == NULL){
        return cnt;
    }
    return lenghtofLLRec(temp -> next, cnt+1);
}


Node *insertNodeRec(Node *temp , int pos , int data){
    if(pos == 0 || temp == NULL){
        Node *newNode = new Node(data);
        newNode -> next = temp;
        temp = newNode;
        return temp;
    }
    else{
        temp -> next = insertNodeRec(temp -> next, pos-1, data);
    }
    return temp;
}


Node *deleteNodeRec(Node *temp , int pos){
    if(pos == 0){
        temp = temp -> next;
        return temp;
    }
    if(pos == 1 || temp == NULL){
       temp -> next = temp -> next -> next; 
       return temp;        
    }else{
       temp -> next = deleteNodeRec(temp -> next, pos-1);
    }
    return temp;
}


int findNode(Node *temp, int val){
    int cnt = 0;
    while(temp != NULL){
        if(temp -> data == val){
            return cnt;
        }
        temp = temp -> next;
        cnt++;
    }
    if(temp == NULL){
        return -1;
    }
    return cnt;
}


// Write a function to append the last 'N' nodes towards the front of LL
Node *appendLastNToFirst(Node *temp, int N){
    if(N == 0)return temp;
    int cnt = 0;
    Node *temp1 = temp;
    while(temp1 -> next != NULL){
        temp1 = temp1 -> next;
        cnt++;
    }
    cnt++;
    int pos = cnt - N - 1;

    Node *temp2 = temp;
    while(pos--){
        temp2 = temp2 -> next;
    }
    Node *temp3 = temp2 -> next;
    temp2 -> next = NULL;
    temp1 -> next = temp;

    return temp3;
}


Node *eliminateDups(Node *temp){
    Node *temp2 = temp;
    while(temp2 -> next != NULL){
        if(temp2 -> next -> data == temp2 -> data){
            temp2 -> next = temp2 -> next -> next;
        }else{
            temp2 = temp2 -> next;
        }
    }
    return temp;

    // FAILED
    // Node *t1 = temp, *t2 = temp -> next;
    // while(t2 != NULL){
    //     if(t1 -> data != t2 -> data){
    //         t1 = t2;
    //         t2 = t2 -> next;
    //     }else{
    //         Node *del = t2;
    //         t2 = t2 -> next;
    //         delete del;
    //     }
    // }
    // return temp;
}


void printReverse(Node *temp){
    if(temp == NULL){
        return;
    }
    printReverse(temp -> next);
    cout << temp -> data << " ";
}

Node *reverseIter(Node *head){
    Node *curr = head, *nxt = NULL, *prev = NULL;
    while(curr != NULL){
        nxt = curr -> next;
        curr -> next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
}


int main(){
    Statically declaring nodes with constructor and linking them together
    Node n1(1);
    Node *head = &n1;
    Node n2(2);
    Node n3(3);
    Node n4(4);
    Node n5(5);

    n1.next = &n2;
    n2.next = &n3;
    n3.next = &n4;
    n4.next = &n5;

    Node *head = takeInput();

    print(head);

    cout<<"Length of Singly Linked List: "<<count(head)<<endl;

    cout<<"Enter the index to insert node: ";
    int index;
    cin>>index;
    cout<<"Enter the data to insert in the node: ";
    int value;
    cin>>value;
    head = nsertNode(head, index, value);

    cout<<"Enter the index to delete node: ";
    int index;
    cin>>index;
    head = deleteNode(head, index);

    print(head);

    cout<<"Length of Singly Linked List: "<<count(head)<<endl;

    cout<<"Enter 'i': ";
    int ith;
    cin>>ith;
    cout<<"ith element of Linked List: "<<ithElement(head, ith)<<endl;

    int cnt = 0;
    Node *temp = head;
    cout <<"length Rec: "<<lenghtofLLRec(temp, cnt)<<endl;

    Node *temp = head;
    head = insertNodeRec(temp, 0, 99 );
    print(head);
    
    Node *temp = head;
    head = deleteNodeRec(temp, 0);
    print(head);

    Node *temp = head;
    int i;
    cout<<"Enter the data to find in List: ";
    cin>> i;
    cout<<"Element " << i << " is found at index: "<< findNode(temp, i)<<endl;

    int N = 0;
    cout<<"Enter N to append to first: ";
    cin>> N;
    Node *temp = head;
    head = appendLastNToFirst(temp, N);
    print(head);


    Node *temp = head;
    head = eliminateDups(temp);
    print(head);

    Node *temp = head;
    cout<<"Reverse: "<<endl;
    printReverse(temp);

    head = reverseIter(head);
    print(head);

    return 0;
};
